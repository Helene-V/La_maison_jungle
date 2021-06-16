import '../styles/Banner.css'

function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
}

export default Banner

/* ATTRIBUT STYLE : à utiliser que pour tester rapidement du code (favoriser className)
function Banner() {
    return <div style={{
        color: 'black',
        textAlign: 'right',
        padding: 32,
        borderBottom:'solid 3px black'
    }}
    >
        <h1>La maison jungle</h1>
    </div>
}
    
*/