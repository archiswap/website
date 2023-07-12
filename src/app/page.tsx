'use client'
import styles from './page.module.css'
import Image from 'next/image'
import {
	TwitterIcon,
	DiscordIcon,
	GithubIcon,
	MediumIcon,
	ArrowIcon,
	ButtonIcon,
	PhoneButtonIcon,
} from '@/assets/svg/app'
import DisplayImg from '@/assets/app/display.png'
import Ellipse from '@/assets/app/ellipse.png'
import PhoneEllipse from '@/assets/app/phone_ellipse.png'

export default function Home() {
	const turnPage = () => {
		window.location.reload()
	}
	const openPage = (url: string) => {
		window.open(url)
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className={styles.main_content}>
				<div className={styles.content}>
					<div className={styles.header_content_wrap}>
						<div className={styles.header_content}>
							<div
								className={styles.header_logo}
								onClick={turnPage}
							></div>
							<div
								className={styles.header_button}
								onClick={() => {
									openPage('https://app.archiswap.io/#/swap')
								}}
							>
								Launch App
							</div>
						</div>
					</div>

					<div className={styles.center_content_wrap}>
						<div className={styles.center_content}>
							<div className={styles.center_left}>
								<h1 className={styles.center_left_text}>
									Innovative On-Chain Spot{' '}
									<br className={styles.tr} /> Trading with
									Leverage
								</h1>
								<div className={styles.center_left_tips}>
									ArchiSwap is a decentralized exchange that{' '}
									<br className={styles.br} />
									amplifies your asset potential through
									leveraged trading.
								</div>

								<div
									className={styles.center_left_button}
									onClick={() => {
										openPage(
											'https://app.archiswap.io/#/swap'
										)
									}}
								>
									<div
										className={
											styles.center_left_button_text
										}
									>
										<span className={styles.dot_wrap}>
											<div className={styles.dot}></div>
										</span>
										<span>Start trading</span>
									</div>
								</div>
							</div>

							<Image
								alt=""
								className={styles.picture_show}
								src={DisplayImg}
								style={{ border: 'none' }}
							></Image>
							<Image
								alt=""
								src={Ellipse}
								className={styles.picture_show_ellipse}
								style={{ border: 'none' }}
							/>
							<Image
								src={PhoneEllipse}
								className={styles.picture_show_ellipse_phone}
								style={{ border: 'none' }}
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className={styles.footer}>
					<div className={styles.footer_content}>
						<div className={styles.footer_content_left}>
							<div className={styles.footer_logo}></div>
							<div className={styles.footer_text}>
								Amplifies your asset potential
							</div>
						</div>
						<div className={styles.footer_content_right}>
							<div className={styles.icons_wrap}>
								<div
									onClick={() => {
										openPage(
											'https://twitter.com/ArchiSwap'
										)
									}}
								>
									<TwitterIcon className={styles.icon_item} />
								</div>
								<div
									onClick={() => {
										openPage(
											'https://discord.com/invite/x8gTGWJrFv'
										)
									}}
								>
									<DiscordIcon className={styles.icon_item} />
								</div>
								<div
									onClick={() => {
										openPage('https://github.com/archiswap')
									}}
								>
									<GithubIcon className={styles.icon_item} />
								</div>
								<div
									onClick={() => {
										openPage(
											'https://medium.com/@0xarchiswap'
										)
									}}
								>
									<MediumIcon className={styles.icon_item} />
								</div>
							</div>
							<div className={styles.footer_text_right}>
								<a
									href="https://github.com/archiswap/report/blob/0950394b1e1cd419feb30e5426c54947fc7fe760/REP-final-20230707T143845Z.pdf"
									style={{
										marginRight: '32px',
									}}
									target="_blank"
								>
									Audit
								</a>
								<a
									href={'mailto:contact@archiswap.io'}
									style={{
										marginRight: '32px',
									}}
								>
									Contact us
								</a>
								<a
									href="https://archiswap.s3.ap-northeast-1.amazonaws.com/ArchiSwap.zip"
									target="_blank"
								>
									Press kit
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
