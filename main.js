
const endTime = new Date('2022-06-29 18:00:00').getTime()



const spanD = document.querySelector('span.d')
const spanH = document.querySelector('span.h')
const spanM = document.querySelector('span.m')
const spanS = document.querySelector('span.s')

setInterval(() => {
	const nowTime = new Date().getTime()
	const time = endTime - nowTime

	const sec = Math.floor((time / 1000) % 60)
	const min = Math.floor(((time / 1000) / 60) % 60)
	const hour = Math.floor((((time / 1000) / 60) / 60) % 24)
	const day = Math.floor((((time / 1000) / 60) / 60) / 24)


	spanS.textContent = sec
	spanM.textContent = min
	spanH.textContent = hour
	spanD.textContent = day

}, 1000)