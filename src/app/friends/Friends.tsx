'use client'
import { $fetch } from '@/$api/api.fetch'
import { Loader } from '@/components/ui/loader/Loader'
import { useProfile } from '@/hooks/useProfile'
import { IUser } from '@/types/user.types'
import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import Image from 'next/image'
import { getImageUrl } from '../config/get-image-url.config'

export function Friends() {
	const { data: authUser, refetch: refetchProfile } = useProfile()

	const { data, isLoading, isFetching, refetch } = useQuery({
		queryKey: ['users'],
		queryFn: () => $fetch.get<IUser[]>('/users?populate=avatar', true),
	})

	return (
		<div className='w-7/12'>
			<h1 className='p-layout border-r border-b border-border'>People</h1>
			{isLoading || isFetching ? (
				<div className='p-layout'>
					<Loader />
				</div>
			) : (
				<div className='grid grid-cols-3'>
					{data?.map(user => {
						const isFriend = authUser?.friends?.some(u => u.id === user.id)

						return (
							<div
								key={user.id}
								className={cn(
									'text-center border border-l-0 border-t-0 border-border p-layout'
								)}
							>
								<Image
									width={100}
									height={100}
									alt={user.username}
									src={getImageUrl(user.avatar?.url) || '/no-avatar.png'}
									priority
									className='mx-auto'
								/>
								<div className='mt-3 text-xl font-medium'>{user.username}</div>
								<button className='border-b border-white transition-colors hover:border-primary hover:text-primary cursor-pointer mt-2'>
									{isFriend ? 'Remove from friends' : 'Add to friends'}
								</button>
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}
