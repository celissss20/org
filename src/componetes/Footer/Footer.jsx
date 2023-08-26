import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.linkedin.com/in/daniel-celis-834a2325b'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.linkedin.com/in/daniel-celis-834a2325b'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.linkedin.com/in/daniel-celis-834a2325b'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <strong>Desarrollado por: Daniel Celis</strong>
    </footer>
}

export default Footer