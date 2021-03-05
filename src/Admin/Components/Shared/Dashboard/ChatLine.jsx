import React from 'react'

const ChatLine = ({data, img}) => {
	return (
		<div className={`ChatLine ${data.layout}`}>
			<div className={`ChatLine__${img} BG`}></div>
			<div>
				<h5 className={`${data.BGcolor}`}>{data.txt}</h5>
				<p>{data.time}</p>
			</div>
		</div>
	)
}

export default ChatLine;
