import { CurrentUser } from '@/components/screens/chats/CurrentUser'
import { ChatsList } from '@/components/screens/chats/list/ChatsList'
import { type PropsWithChildren } from 'react'

export default function ChatLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div
			className='grid h-full'
			style={{
				gridTemplateColumns: '.7fr 3fr',
			}}
		>
			<div className='border-r border-border'>
				<CurrentUser />
				<ChatsList />
			</div>
			<div>{children}</div>
		</div>
	)
}
