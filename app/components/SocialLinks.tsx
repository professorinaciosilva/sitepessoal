import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube} from 'react-icons/fa';

export default function SocialLinks() {
  // Links com os ícones e seus respectivos rótulos
  const links = [
    { href: 'http://www.youtube.com/@professorinaciosilva', icon: <FaYoutube />, label: 'YouTube' },
    { href: 'https://www.facebook.com/share/1BgFvVYPE7/', icon: <FaFacebookF />, label: 'Facebook' },
    { href: 'https://www.instagram.com/professor_inacio/profilecard/?igsh=aXE2MzU1Y2xjZ3Jk', icon: <FaInstagram />, label: 'Instagram' },
    { href: 'https://www.tiktok.com/@professor_inacio?_t=8sXwDFPUZhG&_r=1', icon: <FaTiktok />, label: 'TikTok' },
    // Novo link com o ícone SVG
    { href: 'https://k.kwai.com/u/@professorinaciofrota/Cdmo7RRM', icon: (
      <svg fill="none" height="92" viewBox="0 0 92 92" width="92" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <rect fill="#2563EB" height="91.56" rx="45.78" width="91.56"/>
        <path clipRule="evenodd" d="m36.0241 62.1624c-.6546-.0285-2.3006-.317-3.9684-.7558-1.6549-.4277-2.7855-.999-2.7855-.999-.622-.3117-.849-.8036-.9362-1.3117.0266.0099-.2107-1.5961-.2107-4.7027 0-2.3582.1279-3.6218.1863-4.0208.0627-.4203.2745-.7643.8394-.7383.565.0267 1.333.0132 3.1393.3288 2.154.3851 3.2094.7104 3.7217.8803.4633.1598.9511.5092 1.0454 1.1637 0 0 .2495 1.7198.2457 4.3274.0037 2.1105-.1541 4.2015-.2259 4.8776-.067.6261-.3964.9791-1.0511.9505zm9.752-7.2524c-.0004-.373-.1581-.7205-.4617-.9956l-5.5802-5.1688c-.6403-.6341-1.4022-1.0294-2.3291-1.214 0 0-2.1053-.4907-5.2392-.9869-3.134-.4963-3.9524-.4403-3.9524-.4403-2.7786 0-2.8787 2.7986-2.9074 3.0812-.0686.6755-.2319 2.4656-.2319 4.9575 0 2.9409.1325 4.9787.2924 6.2244.243 1.901 1.7888 2.7924 2.5002 3.1301.1804.0852 2.111.8572 4.0686 1.4274 1.3194.385 3.4335.9479 4.4239 1.0957.3255.0494 2.2386.3598 3.1424-.772l5.9298-7.2623c.2458-.3363.3446-.4732.3446-.9881zm12.9602-10.5933c-.8411-.0807-1.6871-.0979-2.531-.052l-13.3365 1.1794s-.8841.1272-1.3877.7619c-.3896.491-.4715.9007-.4715.9007.1764.1657.2477.2336.345.3177l5.2664 5.0743c.5889.5462.9306 1.0776.9306 1.8729v2.8582c0 .5082-.0464.9352-.3454 1.3184l-2.8244 3.6246 2.8417 1.0413c1.0784.3357 2.0799.3261 3.2056.1642l12.2329-2.6528s2.206-.5545 2.2063-2.5339v-7.0416c0-.1359-.0834-.2528-.2335-.2242l-7.8113 1.4505c-.2915.056-.4741.2918-.4741.5562v3.4112c0 .2037.2509.368.4741.3207l2.4476-.5397c.1273-.0333.2256.0551.2306.219v1.1003c-.0117.2265-.2.3827-.4652.4402l-2.7704.5614c.0023-.0081-1.8593.4478-1.8593-1.4313v-4.3506c0-1.8985 1.4572-2.0907 1.4572-2.0907l8.6007-1.5664c.224-.0399.4036-.2276.4036-.4307v-1.7722c-.0081-1.9568-2.0079-2.0779-2.0079-2.0779zm-15.9851-18.4588c3.1988.1286 5.6236 2.9982 5.4573 6.4879-.1846 3.4798-2.9569 6.2554-6.0387 6.1355-3.1981-.1286-5.5162-3.0263-5.3506-6.5155.1846-3.4797 2.8503-6.2278 5.932-6.1079zm12.886 8.1626c.1311-2.3793 1.9283-4.2598 4.0498-4.1835 2.0169.0856 3.6275 2.1057 3.5195 4.4076-.1301 2.3862-1.9553 4.1951-4.0722 4.1314-2.0223-.0988-3.6041-2.0461-3.4971-4.3555zm10.7239.311c-.0056-4.6964-3.7046-8.4728-8.2575-8.4728-2.6576 0-5.0689 1.3288-6.6293 3.3011-1.1988-5.0131-5.6287-8.7069-10.9324-8.693-6.3298.0168-11.4188 5.1832-11.3977 11.5539.0212 6.4353 5.1375 11.664 11.3977 11.646.3605-.0039 17.611-1.0986 17.5617-1.0995 4.9718-.4055 8.2829-3.6486 8.2575-8.2357z" fill="#fff" fillRule="evenodd"/>
      </svg>
    ), label: 'kwai' }
  ];

  return (
    <div className="text-center mt-8">
      <h2 className="text-3xl mb-6 text-center">
        Siga nossas redes sociais e fique por dentro das novidades!
      </h2>
      <p className="text-lg font-light text-gray-700 mb-4">
        <strong>Youtube</strong>: aulas completas e assuntos explanados de modo detalhado
      </p>
      <p className="text-lg font-light text-gray-700 mb-4">
        <strong>Facebook</strong> e <strong>Instagram</strong>: vídeos curtos de matemática e de divulgação
      </p>
      <p className="text-lg font-light text-gray-700 mb-4">
        <strong>Tiktok</strong> e <strong>Kwai</strong>: vídeos curtos com histórias e curiosidades de matemática
      </p>
      <div className="flex justify-center gap-6">
        {links.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
