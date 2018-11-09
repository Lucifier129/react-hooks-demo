import React from 'react'
import I18nContext from '../I18nContext'

export default class Card extends React.Component {
	static contextType = I18nContext

	state = {
		windowWidth: window.innerWidth,
		x: 0,
		y: 0,
		range: 20
	}

	updateTitle() {
		let { data } = this.props
		let type = this.context === 'cn' ? data.i18n.CN.type : data.type
		let title = this.context === 'cn' ? data.i18n.CN.title : data.title
		document.title = type + ': ' + title
	}

	handleWindowResize = () => {
		this.setState({
			windowWidth: window.innerWidth
		})
	}

	handleMouseMove = event => {
		let width = window.innerWidth
		let height = window.innerHeight
		let originX = width / 2
		let originY = height / 2
		let totalX = width / 2
		let totalY = height / 2

		let mouseX = event.clientX
		let mouseY = event.clientY
		let positionX = mouseX - originX
		let positionY = mouseY - originY
		let x = Math.min(positionX / totalX, 1) * this.state.range
		let y = -Math.min(positionY / totalY, 1) * this.state.range

		this.setState({
			x,
			y
		})
	}

	componentDidMount() {
		this.updateTitle()
		window.addEventListener('resize', this.handleWindowResize)
		window.addEventListener('mousemove', this.handleMouseMove)
	}

	componentWillUnmount() {
		window.addEventListener('resize', this.handleWindowResize)
		window.addEventListener('mousemove', this.handleMouseMove)
	}

	componentDidUpdate() {
		this.updateTitle()
	}

	render() {
		let { data } = this.props
		let type = this.context === 'cn' ? data.i18n.CN.type : data.type
		let title = this.context === 'cn' ? data.i18n.CN.title : data.title
		let tips = this.context === 'cn' ? data.i18n.CN.tips : data.tips
		let list = data.list
		let { x, y } = this.state
		let frameStyle = {
			transform: `rotateX(${y}deg) rotateY(${x}deg)`
		}
		let imageStyle = {
			transform: `translateX(${-x * 1.5}px) translateY(${y * 1.5}px)`
		}
		let backgroundStyle = {
			backgroundPosition: `${-x * 2.5}px ${y * 2.5}px`
		}
		return (
			<React.Fragment>
				<div className="cards" style={frameStyle}>
					<h3>{type}</h3>
					<h1>{title}</h1>
					{list.map(item => {
						return (
							<CardItem
								key={item.name}
								data={item}
								i18n={this.context}
								styles={{ image: imageStyle, background: backgroundStyle }}
							/>
						)
					})}
				</div>
				<span className="notice">
					{tips}: {this.state.windowWidth}
				</span>
			</React.Fragment>
		)
	}
}

const CardItem = ({ data, i18n, styles }) => {
	let name = i18n === 'cn' ? data.i18n.CN.name : data.name
	let image = data.image
	let imageStyle = data.imageStyle
	let background = data.background
	return (
		<div className="card">
			<div
				style={{
					...styles.background,
					backgroundImage: `url(${background})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}
				className="card__bg"
			/>
			<img
				className="card__img"
				style={{ ...imageStyle, ...styles.image }}
				src={image}
				alt={name}
				title={name}
			/>
			<div className="card__text">
				<p className="card__title">{name}</p>
			</div>
		</div>
	)
}
