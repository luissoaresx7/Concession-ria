import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <div className="rodape">
      <div className="rodapeCima">
        <span> 
        <FacebookIcon/>
        </span>
        <span>
        <InstagramIcon/>
        </span>
        <span>
        <TwitterIcon/>
        </span>
        <span>
        <YouTubeIcon/>
        </span>
      </div>
      <div className="rodapeBaixo">
        <span>Termos de Uso</span>
        <span>Política de Privacidade</span>
        <span>Trabalhe Conosco</span>
      </div>
    </div>
  )
  
}