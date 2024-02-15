import '../assets/layout.scss'

function Footer() {
  return (
    <div className="margin-t">
     <div class="footer">
        <p class="footer-center">
                Copyright © 2023 Housing-Society-Management-System
        </p>
        <div class="footer-center di-sm-pb-10 di-md-pb-20">
            <p class="footerlink-outer">
                <a class="footerlinks" title="home">Home</a>
            </p>
            <p class="footerlink-outer">
                <a class="footerlinks" title="contact">Contact</a>
            </p>
            <p class="footerlink-outer">
                <a class="footerlinks" title="contact">About</a>
            </p>
            <p class="footerlink-outer">
                <a class="footerlinks" title="terms">Terms</a>
            </p>
            <p class="footerlink-outer">
                <a class="footerlinks" title="privacy policy">Privacy Policy</a>
            </p>
            <p class="footerlink-outer">
                <a class="footerlinks" title="sitemap">Sitemap</a>
            </p>
        </div>
        <div class="clearfix">
        </div>
    </div>
    </div>
  );
}

export default Footer;