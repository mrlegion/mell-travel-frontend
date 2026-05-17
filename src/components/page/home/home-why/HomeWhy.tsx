import { FaUser } from 'react-icons/fa'
import { FaBookmark, FaCamera, FaMapLocationDot, FaRoute, FaShieldHalved } from 'react-icons/fa6'

import { WhyItem } from '@/components/page/home/home-why/WhyItem'

export function HomeWhy() {
	return (
		<section className='section-pad bg-white'>
			<div className='container'>
				<div className='text-center mb-5'>
					<span className='section-label'>Почему MellTravel?</span>
					<h2 className='section-title'>
						Платформа для тех,
						<br />
						кто путешествует вдумчиво
					</h2>
					<div className='divider-fancy mx-auto'></div>
				</div>
				<div className='row g-4'>
					<WhyItem
						icon={<FaRoute />}
						title='Реальные маршруты'
						text='Никаких рекламных буклетов. Только честные отчёты путешественников
						с GPS-треками, ценами и практическими советами.'
						color='green'
					/>
					<WhyItem
						icon={<FaUser />}
						title='Живое сообщество'
						text='Задайте вопрос тем, кто уже побывал там. Опытные
                        путешественники отвечают в комментариях — не боты, а настоящие люди.'
						color='sky'
					/>
					<WhyItem
						icon={<FaMapLocationDot />}
						title='Интерактивная карта'
						text='Все маршруты на одной карте. Выбирайте регион,
                        фильтруйте по сложности и читайте отчёты прямо из точки на карте.'
						color='sand'
					/>
					<WhyItem
						icon={<FaShieldHalved />}
						title='Проверенный контент'
						text='Модераторы проверяют каждую публикацию. Информация
                        актуальна, источники — реальные путешественники, а не агрегаторы.'
						color='green'
					/>
					<WhyItem
						icon={<FaCamera />}
						title='Фотогалереи'
						text='Живые снимки с маршрутов без фотошопа и фильтров.
                        Вы увидите места такими, какие они есть на самом деле.'
						color='sky'
					/>
					<WhyItem
						icon={<FaBookmark />}
						title='Личный кабинет'
						text='Сохраняйте маршруты в избранное, публикуйте
                        собственные отчёты и отслеживайте интерес читателей.'
						color='sand'
					/>
				</div>
			</div>
		</section>
	)
}
