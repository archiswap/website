'use client'
import styles from './page.module.css'
import {
	TwitterIcon,
	DiscordIcon,
	GithubIcon,
	MediumIcon,
	ArrowIcon,
} from '@/assets/svg/app'

export default function Home() {
	const turnPage = (url: string) => {
		window.location.replace(url)
	}
	const openPage = (url: string) => {
		window.open(url)
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className={styles.main_content}>
				<div className={styles.content}>
					<div className={styles.header_content}>
						<div className={styles.header_logo}></div>
						<div
							className={styles.header_button}
							onClick={() => {
								turnPage('https://www.archiswap.io/#/swap')
							}}
						>
							Enter App
						</div>
					</div>
					<div className={styles.center_content_wrap}>
						<div className={styles.center_content}>
							<div className={styles.center_left}>
								<div className={styles.center_left_text}>
									On-Chain Spot Trading with Leverage
								</div>
								<div
									className={styles.center_left_button}
									onClick={() => {
										turnPage('https://www.archiswap.io/#/swap')
									}}
								>
									<span>Start trading</span>
									<span className={styles.arrows_wrap}>
										<span className={styles.arrow_one}>
											<ArrowIcon opacity="1" />
										</span>
										<span className={styles.arrow_two}>
											<ArrowIcon opacity="1" />
										</span>
										<span className={styles.arrow_three}>
											<ArrowIcon opacity="1" />
										</span>
									</span>
								</div>
							</div>
							<div className={styles.picture_show}></div>
						</div>
					</div>
				</div>
				<div className={styles.footer}>
					<div className={styles.footer_content}>
						<div className={styles.footer_content_left}>
							<div className={styles.footer_logo}></div>
							<div className={styles.footer_text}>
								Decentralized Liquidity Infrastructure
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
										openPage(
											'https://github.com/archiswap'
										)
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
								<a href={"mailto:contact@archiswap.io"} style={{ marginRight: '32px' }}>
									Contact us
								</a>
								<a href="https://archiswap.s3.ap-northeast-1.amazonaws.com/ArchiSwap.zip" target="_blank">Press kit</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
