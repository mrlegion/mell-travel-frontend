import { getAvatarColorSimple } from '@/shared/utils/translate'

import style from '../Track.module.scss'

interface TrackCommentProps {
	author: string
	avatar?: string
	date: string
	text: string
}

export function TrackComment({ author, avatar, date, text }: TrackCommentProps) {
	const viewDate = new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })

	return (
		<div className='comment-box'>
			<div className='d-flex align-items-center gap-2 mb-2'>
				<div className={style.track_comment_avatar}>
					{avatar ? (
						<img className='avatar-sm' src={avatar} alt={author} />
					) : (
						<div className='avatar-fallback' style={{ backgroundColor: getAvatarColorSimple(author) }}>
							{author?.[0]?.toUpperCase() || '?'}
						</div>
					)}
				</div>
				<div>
					<div className={style.track_comment_title}>{author}</div>
					<div className='text-muted-mell' style={{ fontSize: '.78rem' }}>
						{viewDate}
					</div>
				</div>
			</div>
			<p className={style.track_comment_text}>{text}</p>
		</div>
	)
}
