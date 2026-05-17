'use client'

import { useState } from 'react'

import { FAQItem } from '@/components/ui'

import style from './RulesFAQ.module.css'

const faqs = [
	{
		question: 'Можно ли публиковать маршруты не по России?',
		answer:
			'Платформа MellTravel специализируется на внутреннем туризме по России. ' +
			'В настоящее время публикации о маршрутах в других странах не принимаются. ' +
			'Мы планируем расширить географию в будущих версиях' +
			'платформы.'
	},
	{
		question: 'Как долго рассматривается публикация?',
		answer:
			'Все публикации проходят базовую проверку модератором в течение 24 часов. ' +
			'Если контент соответствует правилам — он автоматически появляется в ленте. ' +
			"При нарушениях вы получите уведомление с объяснением.'"
	},
	{
		question: 'Что делать, если мои данные устарели?',
		answer:
			'Вы можете отредактировать любую свою публикацию в личном кабинете. ' +
			'Если вы заметили устаревшую информацию в чужом маршруте — напишите об этом ' +
			'в комментарии или свяжитесь с нами через форму обратной связи.'
	},
	{
		question: 'Можно ли монетизировать контент на платформе?',
		answer:
			'MellTravel не является рекламной площадкой. ' +
			'Скрытая реклама и платное размещение запрещены. ' +
			'Если вы являетесь профессиональным гидом и хотите сотрудничать — свяжитесь с нами через форму обратной связи.'
	}
]

export function RulesFAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const handleToggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<div className='mt-5'>
			<h3 className={style.rules_faq_title}>Часто задаваемые вопросы</h3>
			{faqs.map((item, index) => (
				<FAQItem
					key={index}
					question={item.question}
					answer={item.answer}
					isOpen={openIndex === index}
					onClick={() => handleToggle(index)}
				/>
			))}
		</div>
	)
}
