import React, { useState, useEffect, useContext } from 'react'
import {
	useI18n,
	usePerspective,
	useWindowSize,
	useDoducmentTitle
} from './hooks'
import I18nContext from '../I18nContext'

const Card = ({ data }) => {
	let styles = usePerspective(20)
	let [windowWidth] = useWindowSize()
	let { type, title, list, tips } = useI18n(data, I18nContext)

	useDoducmentTitle(type + ': ' + title)

	return (
		<React.Fragment>
			<div className="cards" style={styles.frame}>
				<h3>{type}</h3>
				<h1>{title}</h1>
				{list.map(item => {
					return <CardItem key={item.name} data={item} styles={styles} />
				})}
			</div>
			<span className="notice">
				{tips}: {windowWidth}
			</span>
		</React.Fragment>
	)
}

const CardItem = ({ data, styles }) => {
	let { name, image, imageStyle, background } = useI18n(data, I18nContext)

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
				style={{ ...styles.image, ...imageStyle }}
				className="card__img"
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

export default Card
