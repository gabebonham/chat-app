'use client';

import React from 'react';
import ReactDOM from 'react-dom';
import { ChatType } from '@/app/_types/ChatType';

export default function ChatModal({
	initialMessages,
}: {
	initialMessages: ChatType[];
}) {
	const modalContent = (
		<div className="animate-zoomIn absolute inset-0 ml-64 p-12">
			<div className="bg-white rounded-2xl outline">
				{initialMessages.map((m) => (
					<p key={m.id}>{m.msg}</p>
				))}
			</div>
		</div>
	);

	return ReactDOM.createPortal(modalContent, document.body);
}
