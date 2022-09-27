import logoFacebook from '../assets/img/facebook.svg';
import logoTwitter from '../assets/img/twitter.svg';
import logoYoutube from '../assets/img/youtube.svg';
import '../assets/style/footer.css'

function Footer() {
    return (
        <footer>
            <div className='footer_img'>
                <a href="https://www.facebook.com/"><img src={logoFacebook} alt="Logo Facebook"/></a>
                <a href="https://twitter.com/?lang=es"><img src={logoTwitter} alt="Logo Twitter" /></a>
                <a href="https://www.youtube.com/"><img src={logoYoutube} alt="Logo Youtube" /></a>
            </div>
        </footer>
            );
}

export default Footer;