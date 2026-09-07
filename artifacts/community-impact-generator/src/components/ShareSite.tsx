import { useState } from 'react';
import { Copy, Share2 } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'wouter';

const shareText = 'Find a practical way to turn your skills and spare time into community impact with Charity Hustle.';

export function ShareSite() {
  const [status, setStatus] = useState('');
  const shareUrl = new URL(import.meta.env.BASE_URL, window.location.origin).toString();
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(shareText);
  const canNativeShare = typeof navigator.share === 'function';

  const showStatus = (message: string) => {
    setStatus(message);
    window.setTimeout(() => setStatus(''), 3200);
  };

  const copyLink = async (platform?: string) => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      showStatus(platform ? `Link copied — paste it into ${platform}.` : 'Website link copied.');
    } catch {
      showStatus('Select and copy the website address from your browser.');
    }
  };

  const shareAnotherWay = async () => {
    if (canNativeShare) {
      try {
        await navigator.share({ title: 'Charity Hustle', text: shareText, url: shareUrl });
        showStatus('Thanks for sharing Charity Hustle.');
      } catch {
        // Closing the native share sheet is not an error that needs surfacing.
      }
      return;
    }

    await copyLink();
  };

  return (
    <section className="share-section" id="share-site" aria-labelledby="share-title">
      <div className="share-inner">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> Pass a good thing on</div>
          <h2 id="share-title">Share this website.</h2>
          <p>Know someone with a little time, a useful skill, or a cause they care about? Send Charity Hustle their way.</p>
          <Link href="/contact" className="share-contact-link">Have a question or suggestion? Contact us</Link>
        </div>

        <div className="share-actions" aria-label="Share Charity Hustle">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share Charity Hustle on Facebook"
          >
            <FaFacebookF /> Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share Charity Hustle on X"
          >
            <FaXTwitter /> X
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => void copyLink('TikTok')}
            aria-label="Copy the Charity Hustle link and open TikTok"
          >
            <FaTiktok /> TikTok
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => void copyLink('Instagram')}
            aria-label="Copy the Charity Hustle link and open Instagram"
          >
            <FaInstagram /> Instagram
          </a>
          <button type="button" onClick={() => void shareAnotherWay()}>
            {canNativeShare ? <Share2 /> : <Copy />}
            {canNativeShare ? 'More ways' : 'Copy link'}
          </button>
          <p className="share-status" aria-live="polite">{status}</p>
        </div>
      </div>
    </section>
  );
}