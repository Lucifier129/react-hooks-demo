import React, { useState, useEffect, useContext } from 'react'

export const useMousePosition = (defaultPosition = [0, 0]) => {
	let [position, setPosition] = useState(defaultPosition)
	useEffect(() => {
		let handleMouseMove = event => setPosition([event.clientX, event.clientY])
		window.addEventListener('mousemove', handleMouseMove, false)
		return () => window.removeEventListener('mousemove', handleMouseMove, false)
	}, [])
	return position
}

export const useWindowSize = () => {
	let [size, setSize] = useState([window.innerWidth, window.innerHeight])
	useEffect(() => {
		let handleWindowResize = event => {
			setSize([window.innerWidth, window.innerHeight])
		}
		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])
	return size
}

export const useCoordinate = defaultPosition => {
	let [width, height] = useWindowSize()
	let originX = width / 2
	let originY = height / 2
	let totalX = width / 2
	let totalY = height / 2

	let [mouseX, mouseY] = useMousePosition([originX, originY])
	let positionX = mouseX - originX
	let positionY = mouseY - originY
	let scaleX = Math.min(positionX / totalX, 1)
	let scaleY = Math.min(positionY / totalY, 1)

	return {
		position: [positionX, positionY],
		total: [totalX, totalY],
		scale: [scaleX, scaleY]
	}
}

export const usePerspective = (range = 10) => {
	let [scaleX, scaleY] = useCoordinate().scale
	let x = scaleX * range
	let y = -scaleY * range
	let styles = {
		frame: {
			transform: `rotateX(${y}deg) rotateY(${x}deg)`
		},
		image: {
			transform: `translateX(${-x * 1.5}px) translateY(${y * 1.5}px)`
		},
		background: {
			backgroundPosition: `${-x * 2.5}px ${y * 2.5}px`
		}
	}
	return styles
}

export const useToggle = (firstValue, secondValue) => {
	let [value, setValue] = useState(firstValue)
	let toggle = () => {
		if (value === firstValue) return setValue(secondValue)
		if (value === secondValue) return setValue(firstValue)
	}
	return [value, toggle]
}

export const useDoducmentTitle = title => {
	useEffect(() => (document.title = title), [title])
}

export const useI18n = (obj, I18nContext) => {
	if (!obj || !obj.i18n) return obj
	let locale = useContext(I18nContext)
	let target = obj.i18n[locale.toUpperCase()]
	return { ...obj, ...target }
}

export const useHash = () => {
	let [hash, setHash] = useState(window.location.hash.slice(1))
	useEffect(() => {
		let handleHashChange = () => setHash(window.location.hash.slice(1))
		window.addEventListener('hashchange', handleHashChange)
		return () => window.removeEventListener('hashchange', handleHashChange)
	}, [])
	return hash
}
