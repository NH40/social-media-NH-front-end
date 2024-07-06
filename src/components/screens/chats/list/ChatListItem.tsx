'use client'

import { getImageUrl } from '@/app/config/get-image-url.config'
import { useAuth } from '@/hooks/useAuth'
import { IChat } from '@/types/chat.types'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'

interface IChatListItem {
	chat: IChat
}

export function ChatListItem({ chat }: IChatListItem) {
	const { user } = useAuth()

	const correspondent = chat.participants.find(u => u.email !== user?.email)
	const lastMessage = chat.messages.at(-1)

	return (
		<Link
			href={`/chat/${chat.id}`}
			className='p-layout flex items-center border-b border-border duration-300 ease-linear transition-colors hover:bg-border animation-slide-fade'
		>
			<Image
				src={getImageUrl(correspondent?.avatar?.url) || '/no-avatar.png'}
				alt={correspondent?.email || ''}
				width={45}
				height={45}
				className='mr-4'
			/>
			<div className='text-sm w-full'>
				<div className='flex items-center justify-between'>
					<span>{correspondent?.username}</span>
					<span className='text-xs opacity-30'>
						{dayjs(lastMessage?.createdAt).format('HH:mm')}
					</span>
				</div>
				<div className='opacity-30 mt-0.5'>{lastMessage?.text}</div>
			</div>
		</Link>
	)
}
