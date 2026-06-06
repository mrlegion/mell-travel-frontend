import { Metadata } from 'next'
import Link from 'next/link'

import { PUBLIC_URL } from '@/config/url.config'

export const metadata: Metadata = {
	title: 'Политика конфиденциальности'
}

export function PrivacyPolicy() {
	return (
		<div className='bg-white'>
			<section className='contacts-hero'>
				<div className='container'>
					<div className='text-center'>
						<h1 className='text-white'>Политика конфиденциальности</h1>
						<p className='text-white opacity-75'>Дата последнего обновления: 15 апреля 2024 г.</p>
					</div>
				</div>
			</section>

			<section className='section-pad'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-8'>
							<div className='post-content'>
								<p className='lead mb-5'>
									Настоящая Политика конфиденциальности регулирует порядок сбора, использования и
									раскрытия персональной информации пользователей сайта MellTravel.
								</p>

								<div className='mb-5'>
									<h2 className='mb-4'>1. Общие положения</h2>
									<p className='mb-3'>
										1.1. Настоящая Политика разработана в соответствии с Федеральным законом от
										27.07.2006 № 152-ФЗ "О персональных данных".
									</p>
									<p>
										1.2. Администрация сайта MellTravel (далее — "Администрация") обеспечивает
										защиту прав и свобод человека и гражданина при обработке его персональных
										данных.
									</p>
								</div>

								<div className='mb-5'>
									<h2 className='mb-4'>2. Персональная информация, которую мы собираем</h2>

									<h4 className='mb-3'>2.1. Информация, предоставляемая вами:</h4>
									<ul className='mb-4'>
										<li className='mb-2'>Имя</li>
										<li className='mb-2'>Адрес электронной почты</li>
										<li className='mb-2'>Фотографии и медиафайлы (при публикации)</li>
										<li className='mb-2'>Комментарии и отзывы</li>
									</ul>

									<h4 className='mb-3'>2.2. Автоматически собираемая информация:</h4>
									<ul>
										<li className='mb-2'>IP-адрес</li>
										<li className='mb-2'>Тип браузера</li>
										<li className='mb-2'>Время посещения сайта</li>
										<li className='mb-2'>Просмотренные страницы</li>
										<li className='mb-2'>Информация о файле cookie</li>
									</ul>
								</div>

								<div className='mb-5'>
									<h2 className='mb-4'>3. Цели сбора и использования информации</h2>
									<p className='mb-3'>Мы используем вашу персональную информацию для:</p>
									<ul>
										<li className='mb-2'>Создания и управления вашим аккаунтом</li>
										<li className='mb-2'>Предоставления доступа к функциям Сайта</li>
										<li className='mb-2'>Обработки ваших публикаций и комментариев</li>
										<li className='mb-2'>Улучшения качества сервиса</li>
										<li className='mb-2'>Отправки уведомлений и новостей (по вашему согласию)</li>
										<li className='mb-2'>Обеспечения безопасности Сайта</li>
										<li className='mb-2'>Соблюдения требований законодательства</li>
									</ul>
								</div>

								<div className='mb-5'>
									<h2 className='mb-4'>4. Способы защиты персональной информации</h2>
									<p className='mb-3'>
										4.1. Администрация принимает все необходимые организационные и технические меры
										для защиты персональной информации от неправомерного доступа, уничтожения,
										изменения, блокирования, копирования и распространения.
									</p>
									<p>
										4.2. Персональные данные хранятся на защищенных серверах с ограниченным
										доступом.
									</p>
								</div>

								<div className='mb-5'>
									<h2 className='mb-4'>5. Передача информации третьим лицам</h2>
									<p>
										Ваши персональные данные могут быть переданы третьим лицам только в следующих
										случаях:
									</p>
									<ul className='mb-3'>
										<li className='mb-2'>С вашего явного согласия</li>
										<li className='mb-2'>Для выполнения требований закона</li>
										<li className='mb-2'>Для защиты прав и законных интересов Администрации</li>
										<li className='mb-2'>
											При продаже или передаче бизнеса (при условии сохранения конфиденциальности)
										</li>
									</ul>
								</div>

								<div className='mb-5'>
									<h2 className='mb-4'>6. Использование файлов cookie</h2>
									<p className='mb-3'>Сайт использует файлы cookie для:</p>
									<ul className='mb-3'>
										<li className='mb-2'>Улучшения пользовательского опыта</li>
										<li className='mb-2'>Анализа трафика сайта</li>
										<li className='mb-2'>Персонализации контента</li>
										<li className='mb-2'>Рекламных целей</li>
									</ul>
									<p>Вы можете отключить использование файлов cookie в настройках вашего браузера.</p>
								</div>

								<div className='mb-5'>
									<h2 className='mb-4'>7. Ваши права</h2>
									<p>Вы имеете право:</p>
									<ul className='mb-3'>
										<li className='mb-2'>
											Получать информацию, касающуюся обработки ваших персональных данных
										</li>
										<li className='mb-2'>
											Требовать уточнения, блокирования или уничтожения ваших персональных данных
										</li>
										<li className='mb-2'>Отозвать согласие на обработку персональных данных</li>
										<li className='mb-2'>
											Обжаловать действия Администрации в уполномоченный орган по защите прав
											субъектов персональных данных
										</li>
									</ul>
								</div>

								<div className='mb-5'>
									<h2 className='mb-4'>8. Хранение информации</h2>
									<p>
										Персональные данные хранятся в течение всего срока использования Сайта, а также
										в течение установленного законодательством срока после прекращения
										использования.
									</p>
								</div>

								<div className='mb-5'>
									<h2 className='mb-4'>9. Изменения в Политике конфиденциальности</h2>
									<p>
										Администрация оставляет за собой право вносить изменения в настоящую Политику.
										Новая редакция вступает в силу с момента ее размещения на Сайте.
									</p>
								</div>

								<div className='mb-5'>
									<h2 className='mb-4'>10. Контактная информация</h2>
									<p>
										По всем вопросам, связанным с настоящей Политикой, вы можете связаться с нами:
									</p>
									<ul className='mb-4'>
										<li className='mb-2'>
											<strong>Email:</strong>{' '}
											<a href='mailto:hello@melltravel.ru' className='text-sage'>
												hello@melltravel.ru
											</a>
										</li>
									</ul>
									<p>
										Или через форму обратной связи на странице{' '}
										<Link href={PUBLIC_URL.contacts()} className='text-sage'>
											Контакты
										</Link>
										.
									</p>
								</div>

								<div className='text-center mt-5 pt-4 border-top'>
									<Link href={PUBLIC_URL.home()} className='btn-outline-green'>
										Вернуться на главную
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
