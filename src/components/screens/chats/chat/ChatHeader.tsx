import { getImageUrl } from '@/app/config/get-image-url.config'
import { IUser } from '@/types/user.types'
import { Search } from 'lucide-react'
import Image from 'next/image'

export function ChatHeader({ correspondent }: { correspondent?: IUser }) {
	return (
		<div className='p-layout flex items-center justify-between py-[1.56rem]'>
			<div className='flex items-center'>
				<Image
					src={getImageUrl(correspondent?.avatar?.url) || '/no-avatar.png'}
					alt={''}
					width={40}
					height={40}
					className='mr-4'
					priority
				/>
				<div className='text-sm'>
					<div>{correspondent?.username}</div>
					<div className='opacity-30'>2 members</div>
				</div>
			</div>
			<button className='text-[#7C7275] hover:text-white transition-colors ease-linear'>
				<Search />
			</button>
		</div>
	)
}
