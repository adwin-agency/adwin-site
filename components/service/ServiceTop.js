import cn from 'classnames'
import ServiceOffer from './ServiceOffer'
import details from '../../data/details'
import useAnim from '../../helpers/useAnim'
import styles from './ServiceTop.module.scss'

const offerDelays = {
  landing: '2.75s',
  corporate: '2.5s',
  store: '4.125s'
}

export default function ServiceTop({ type }) {
  const { heading, desc } = details[type]

  const { anim, animRef } = useAnim()

  return (
    <>
      <section className={cn(styles.el, styles[type], { [styles.anim]: anim })} ref={animRef}>
        <div className='container'>
          <div className={styles.main}>
            <div className={styles.info}>
              <h1 className={cn('h1', styles.heading)}>{heading}</h1>
              <p className={styles.desc}>
                <span className={styles.arrow}></span>
                {desc}
              </p>
            </div>

            <div className={styles.box}>

              {type === 'landing' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 616 541" fill="none" className={styles.image} style={{ transform: `scale(${anim ? '1' : '1.5'})`, transitionDelay: '1.25s', transitionDuration: '0.5s' }}>
                  <path d="M2 541V22C2 10.9543 10.9543 2 22 2H594C605.046 2 614 10.9543 614 22V541" stroke="#1B1A1A" strokeWidth="3" />
                  <g style={{ transform: `translateY(${anim ? '0' : '5rem'})`, transitionDelay: '1.5s' }}>
                    <path d="M232.5 2.5H368.5V9C368.5 11.4853 366.485 13.5 364 13.5H237C234.515 13.5 232.5 11.4853 232.5 9V2.5Z" stroke="#1B1A1A" strokeWidth="3" />
                  </g>
                  <g style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '1.5s' }}>
                    <rect x="26.5" y="29.5" width="93" height="40" rx="6.5" stroke="#D2113A" strokeWidth="3" />
                    <rect x="463.5" y="33.5" width="119" height="30" rx="15" stroke="#D2113A" strokeWidth="3" />
                    <rect x="160.75" y="46.75" width="51.5" height="1.5" stroke="#D2113A" strokeWidth="1.5" />
                    <rect x="231.75" y="46.75" width="51.5" height="1.5" stroke="#D2113A" strokeWidth="1.5" />
                    <rect x="302.75" y="46.75" width="51.5" height="1.5" stroke="#D2113A" strokeWidth="1.5" />
                    <rect x="375.75" y="46.75" width="51.5" height="1.5" stroke="#D2113A" strokeWidth="1.5" />
                  </g>
                  <g style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '1.75s' }}>
                    <rect x="26.5" y="95.5" width="556" height="177" rx="6.5" stroke="#D2113A" strokeWidth="3" />
                  </g>
                  <g style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '2s' }}>
                    <rect x="26.5" y="302.5" width="180" height="117" rx="6.5" stroke="#D2113A" strokeWidth="3" />
                    <rect x="214.5" y="302.5" width="180" height="117" rx="6.5" stroke="#D2113A" strokeWidth="3" />
                    <rect x="402.5" y="302.5" width="180" height="117" rx="6.5" stroke="#D2113A" strokeWidth="3" />
                  </g>
                  <g style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '2.25s' }}>
                    <path d="M26 541V436C26 431.582 29.5817 428 34 428H387C391.418 428 395 431.582 395 436V541" stroke="#D2113A" strokeWidth="3" />
                    <path d="M404 541V436C404 431.582 407.582 428 412 428H575C579.418 428 583 431.582 583 436V541" stroke="#D2113A" strokeWidth="3" />
                  </g>
                </svg>
              )}

              {type === 'corporate' && (
                <>
                  <svg viewBox="0 0 1188 541" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.image} style={{ transform: `translateX(${anim ? '0' : '100rem'})`, transitionDelay: '1.25s', transitionDuration: '1s' }}>
                    <path d="M726 300C726 289.507 734.507 281 745 281H1168C1178.49 281 1187 289.507 1187 300V521C1187 531.493 1178.49 540 1168 540H745C734.507 540 726 531.493 726 521V300Z" stroke="#1B1A1A" strokeWidth="2" />
                    <rect x="744" y="301" width="70" height="30" rx="7" stroke="#1B1A1A" strokeWidth="2" />
                    <rect x="845.75" y="313.75" width="38.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="898.75" y="313.75" width="38.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="953.75" y="313.75" width="37.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="1007.75" y="313.75" width="38.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="744" y="351" width="156" height="25" rx="8" fill="#DBDBDB" />
                    <rect x="743" y="501" width="80" height="7" rx="3.5" fill="#DBDBDB" />
                    <rect x="837" y="501" width="79" height="7" rx="3.5" fill="#DBDBDB" />
                    <rect x="931" y="501" width="79" height="7" rx="3.5" fill="#DBDBDB" />
                    <rect x="743" y="510" width="80" height="8" rx="4" fill="#DBDBDB" />
                    <rect x="837" y="510" width="79" height="8" rx="4" fill="#DBDBDB" />
                    <rect x="931" y="510" width="79" height="8" rx="4" fill="#DBDBDB" />
                    <rect x="743" y="520" width="57" height="7" rx="3.5" fill="#DBDBDB" />
                    <rect x="837" y="520" width="56" height="7" rx="3.5" fill="#DBDBDB" />
                    <rect x="931" y="520" width="56" height="7" rx="3.5" fill="#DBDBDB" />
                    <rect x="744" y="396" width="78" height="99" rx="7" stroke="#D2113A" strokeWidth="2" />
                    <rect x="838" y="396" width="77" height="99" rx="7" stroke="#1B1A1A" strokeWidth="2" />
                    <rect x="932" y="396" width="77" height="99" rx="7" stroke="#1B1A1A" strokeWidth="2" />
                    <path d="M237 300C237 289.507 245.507 281 256 281H679C689.493 281 698 289.507 698 300V521C698 531.493 689.493 540 679 540H256C245.507 540 237 531.493 237 521V300Z" stroke="#1B1A1A" strokeWidth="2" />
                    <path d="M410 281H514V284C514 286.761 511.761 289 509 289H415C412.239 289 410 286.761 410 284V281Z" stroke="#1B1A1A" strokeWidth="2" />
                    <rect x="255" y="301" width="70" height="30" rx="7" stroke="#1B1A1A" strokeWidth="2" />
                    <rect x="585" y="304" width="90" height="22" rx="11" stroke="#1B1A1A" strokeWidth="2" />
                    <rect x="356.75" y="313.75" width="38.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="409.75" y="313.75" width="39.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="464.75" y="313.75" width="37.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="518.75" y="313.75" width="39.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="400" y="520" width="70" height="8" rx="4" fill="#DBDBDB" />
                    <rect x="254" y="520" width="70" height="8" rx="4" fill="#DBDBDB" />
                    <rect x="545" y="520" width="70" height="8" rx="4" fill="#DBDBDB" />
                    <rect x="497" y="520" width="34" height="8" rx="4" fill="#DBDBDB" />
                    <rect x="352" y="520" width="33" height="8" rx="4" fill="#DBDBDB" />
                    <rect x="643" y="520" width="33" height="8" rx="4" fill="#DBDBDB" />
                    <rect x="255" y="350" width="420" height="76" rx="7" stroke="#D2113A" strokeWidth="2" />
                    <rect x="401" y="440" width="129" height="74" rx="7" stroke="#1B1A1A" strokeWidth="2" />
                    <rect x="255" y="440" width="129" height="74" rx="7" stroke="#1B1A1A" strokeWidth="2" />
                    <rect x="546" y="440" width="129" height="74" rx="7" stroke="#1B1A1A" strokeWidth="2" />
                  </svg>
                  <svg viewBox="0 0 1188 541" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.image} style={{ transform: `translateX(${anim ? '0' : '-100rem'})`, transitionDelay: '1.5s', transitionDuration: '1s' }}>
                    <path d="M660 1H763V5C763 7.76142 760.761 10 758 10H665C662.239 10 660 7.76142 660 5V1Z" stroke="#1B1A1A" strokeWidth="2" />
                    <path d="M174 1H277V5C277 7.76142 274.761 10 272 10H179C176.239 10 174 7.76142 174 5V1Z" stroke="#1B1A1A" strokeWidth="2" />
                    <rect x="18" y="21" width="71" height="31" rx="7" stroke="#1B1A1A" strokeWidth="2" />
                    <rect x="349" y="24" width="90" height="24" rx="12" stroke="#1B1A1A" strokeWidth="2" />
                    <rect x="120.75" y="34.75" width="38.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="173.75" y="34.75" width="38.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="227.75" y="34.75" width="38.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="282.75" y="34.75" width="38.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="18" y="71" width="421" height="135" rx="7" stroke="#D2113A" strokeWidth="2" />
                    <path d="M18 224C18 220.134 21.134 217 25 217H289C292.866 217 296 220.134 296 224V260H18V224Z" stroke="#1B1A1A" strokeWidth="2" />
                    <path d="M302 224C302 220.134 305.134 217 309 217H432C435.866 217 439 220.134 439 224V260H302V224Z" stroke="#1B1A1A" strokeWidth="2" />
                    <path d="M1 20C1 9.50658 9.50659 1 20 1H443C453.493 1 462 9.50659 462 20V241C462 251.493 453.493 260 443 260H20C9.5066 260 1 251.493 1 241V20Z" stroke="#1B1A1A" strokeWidth="2" />
                    <path d="M487 20C487 9.50658 495.507 1 506 1H929C939.493 1 948 9.50659 948 20V241C948 251.493 939.493 260 929 260H506C495.507 260 487 251.493 487 241V20Z" stroke="#1B1A1A" strokeWidth="2" />
                    <rect x="504" y="21" width="71" height="31" rx="7" stroke="#1B1A1A" strokeWidth="2" />
                    <rect x="835" y="24" width="90" height="24" rx="12" stroke="#1B1A1A" strokeWidth="2" />
                    <rect x="605.75" y="34.75" width="39.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="659.75" y="34.75" width="38.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="713.75" y="34.75" width="38.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="768.75" y="34.75" width="38.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="720" y="77" width="205" height="117" rx="7" stroke="#1B1A1A" strokeWidth="2" />
                    <rect x="503" y="70" width="156" height="25" rx="8" fill="#DBDBDB" />
                    <rect x="503" y="112" width="210" height="12" rx="6" fill="#DBDBDB" />
                    <rect x="503" y="126" width="210" height="11" rx="5.5" fill="#DBDBDB" />
                    <rect x="503" y="139" width="210" height="11" rx="5.5" fill="#DBDBDB" />
                    <rect x="503" y="152" width="210" height="12" rx="6" fill="#DBDBDB" />
                    <rect x="550" y="225" width="77" height="12" rx="6" fill="#DBDBDB" />
                    <rect x="680" y="225" width="77" height="12" rx="6" fill="#DBDBDB" />
                    <rect x="823" y="225" width="76" height="12" rx="6" fill="#DBDBDB" />
                    <rect x="503" y="166" width="156" height="11" rx="5.5" fill="#DBDBDB" />
                    <rect x="550" y="238" width="57" height="12" rx="6" fill="#DBDBDB" />
                    <rect x="680" y="238" width="57" height="12" rx="6" fill="#DBDBDB" />
                    <rect x="823" y="238" width="57" height="12" rx="6" fill="#DBDBDB" />
                    <path d="M545 237.5C545 245.539 538.701 252 531 252C523.299 252 517 245.539 517 237.5C517 229.461 523.299 223 531 223C538.701 223 545 229.461 545 237.5Z" stroke="#D2113A" strokeWidth="2" />
                    <path d="M675 237.5C675 245.539 668.701 252 661 252C653.299 252 647 245.539 647 237.5C647 229.461 653.299 223 661 223C668.701 223 675 229.461 675 237.5Z" stroke="#D2113A" strokeWidth="2" />
                    <circle cx="803.5" cy="237.5" r="14.5" stroke="#D2113A" strokeWidth="2" />
                  </svg>
                </>
              )}

              {type === 'store' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="441" height="371" viewBox="0 0 441 371" fill="none" className={styles.image} style={{ transform: `scale(${anim ? '1' : '1.5'})`, transitionDelay: '1.25s', transitionDuration: '0.5s' }}>
                  <g style={{ transform: `translate(${anim ? '0, 0' : '-50rem, 50rem'})`, transitionDelay: '3.625s' }}>
                    <rect x="41" y="1" width="399" height="253" rx="19" fill="#EEEEEA" stroke="#DBDBDB" strokeWidth="2" />
                  </g>
                  <g style={{ transform: `translate(${anim ? '0, 0' : '-50rem, 50rem'})`, transitionDelay: '3.375s' }}>
                    <rect x="21" y="21" width="399" height="253" rx="19" fill="#EEEEEA" stroke="#DBDBDB" strokeWidth="2" />
                  </g>
                  <path d="M1 62C1 50.9543 9.95431 42 21 42H382C393.046 42 402 50.9543 402 62V370H1V62Z" fill="#EEEEEA" />
                  <path d="M1 371V62C1 50.9543 9.95431 42 21 42H382C393.046 42 402 50.9543 402 62V371" stroke="#1B1A1A" strokeWidth="2" />
                  <path d="M152 42H241V43C241 45.7614 238.761 48 236 48H157C154.239 48 152 45.7614 152 43V42Z" stroke="#1B1A1A" strokeWidth="2" />
                  <g style={{ transform: `translateY(${anim ? '0' : '5rem'})`, transitionDelay: '1.5s' }}>
                    <rect x="17" y="60" width="61" height="27" rx="7" stroke="#1B1A1A" strokeWidth="2" />
                    <rect x="105.75" y="70.75" width="32.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="151.75" y="70.75" width="33.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="198.75" y="70.75" width="32.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="245.75" y="70.75" width="33.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                    <rect x="332.839" y="62.3527" width="8.9527" height="8.9527" rx="4.47635" transform="rotate(45 332.839 62.3527)" stroke="#1B1A1A" strokeWidth="2" />
                    <rect x="336.711" y="72.3146" width="5.81718" height="0.654867" transform="rotate(45 336.711 72.3146)" stroke="#1B1A1A" strokeWidth="0.654867" />
                    <path d="M373.366 68.8527L374.367 63.3648C374.384 63.2706 374.38 63.1736 374.354 63.0812C374.329 62.9888 374.283 62.9035 374.219 62.8316C374.159 62.7575 374.082 62.6977 373.996 62.6565C373.909 62.6154 373.815 62.5939 373.719 62.5938H360.487L360.085 60.3871C360.03 60.0858 359.87 59.8135 359.635 59.6172C359.4 59.421 359.104 59.3132 358.797 59.3125H357.312C357.138 59.3125 356.972 59.3816 356.848 59.5047C356.725 59.6278 356.656 59.7947 356.656 59.9688C356.656 60.1428 356.725 60.3097 356.848 60.4328C356.972 60.5559 357.138 60.625 357.312 60.625H358.797L361.045 73.0117C360.724 73.294 360.489 73.66 360.365 74.0687C360.241 74.4773 360.234 74.9125 360.343 75.3252C360.453 75.7379 360.675 76.1119 360.986 76.4051C361.296 76.6984 361.682 76.8992 362.101 76.9852C362.519 77.0711 362.953 77.0388 363.354 76.8917C363.755 76.7447 364.107 76.4887 364.37 76.1527C364.634 75.8167 364.799 75.4138 364.846 74.9894C364.893 74.565 364.821 74.1358 364.638 73.75H369.018C368.805 74.1997 368.744 74.7064 368.843 75.1941C368.943 75.6817 369.198 76.1237 369.571 76.4537C369.943 76.7837 370.413 76.9838 370.909 77.0238C371.405 77.0638 371.901 76.9416 372.321 76.6756C372.742 76.4096 373.065 76.0142 373.241 75.5488C373.418 75.0835 373.438 74.5734 373.3 74.0954C373.161 73.6173 372.871 73.1972 372.474 72.8982C372.076 72.5992 371.591 72.4375 371.094 72.4375H362.275L361.914 70.4688H371.43C371.891 70.4685 372.337 70.3067 372.691 70.0114C373.044 69.7161 373.283 69.3061 373.366 68.8527ZM363.547 74.7344C363.547 74.9291 363.489 75.1194 363.381 75.2813C363.273 75.4431 363.119 75.5693 362.939 75.6438C362.759 75.7183 362.561 75.7378 362.37 75.6998C362.18 75.6619 362.004 75.5681 361.866 75.4304C361.729 75.2928 361.635 75.1174 361.597 74.9264C361.559 74.7355 361.579 74.5375 361.653 74.3577C361.728 74.1778 361.854 74.0241 362.016 73.9159C362.177 73.8077 362.368 73.75 362.562 73.75C362.824 73.75 363.074 73.8537 363.259 74.0383C363.443 74.2229 363.547 74.4733 363.547 74.7344ZM372.078 74.7344C372.078 74.9291 372.02 75.1194 371.912 75.2813C371.804 75.4431 371.65 75.5693 371.47 75.6438C371.291 75.7183 371.093 75.7378 370.902 75.6998C370.711 75.6619 370.535 75.5681 370.398 75.4304C370.26 75.2928 370.166 75.1174 370.128 74.9264C370.09 74.7355 370.11 74.5375 370.184 74.3577C370.259 74.1778 370.385 74.0241 370.547 73.9159C370.709 73.8077 370.899 73.75 371.094 73.75C371.355 73.75 371.605 73.8537 371.79 74.0383C371.974 74.2229 372.078 74.4733 372.078 74.7344ZM360.725 63.9062H372.931L372.078 68.6148C372.051 68.7669 371.971 68.9046 371.853 69.0036C371.734 69.1027 371.585 69.1567 371.43 69.1562H361.677L360.725 63.9062Z" fill="#D2113A" />
                    <circle cx="375" cy="62" r="2.25" fill="#D2113A" stroke="#EEEEEA" strokeWidth="1.5" />
                  </g>
                  <g style={{ transform: `translateY(${anim ? '0' : '50rem'})`, transitionDelay: '1.75s' }}>
                    <rect x="17" y="104" width="364" height="95" rx="7" stroke="#D2113A" strokeWidth="2" />
                  </g>
                  <g style={{ transform: `translateY(${anim ? '0' : '50rem'})`, transitionDelay: '2s' }}>
                    <path d="M16 370V220C16 215.582 19.5817 212 24 212H97C101.418 212 105 215.582 105 220V370" stroke="#DBDBDB" strokeLinecap="round" />
                    <path d="M26.5 232.5C26.5 230.843 27.8431 229.5 29.5 229.5H56.5C58.1569 229.5 59.5 230.843 59.5 232.5C59.5 234.157 58.1569 235.5 56.5 235.5H29.5C27.8431 235.5 26.5 234.157 26.5 232.5Z" fill="#D2113A" stroke="#DBDBDB" />
                    <path d="M61.5 232.5C61.5 230.843 62.8431 229.5 64.5 229.5H90.5C92.1569 229.5 93.5 230.843 93.5 232.5C93.5 234.157 92.1569 235.5 90.5 235.5H64.5C62.8431 235.5 61.5 234.157 61.5 232.5Z" fill="#DBDBDB" stroke="#DBDBDB" />
                    <path d="M26.5 241C26.5 239.067 28.067 237.5 30 237.5H47C48.933 237.5 50.5 239.067 50.5 241C50.5 242.933 48.933 244.5 47 244.5H30C28.067 244.5 26.5 242.933 26.5 241Z" fill="#DBDBDB" stroke="#DBDBDB" />
                    <path d="M53.5 241C53.5 239.067 55.067 237.5 57 237.5H74C75.933 237.5 77.5 239.067 77.5 241C77.5 242.933 75.933 244.5 74 244.5H57C55.067 244.5 53.5 242.933 53.5 241Z" fill="#DBDBDB" stroke="#DBDBDB" />
                    <path d="M26.5 266.5C26.5 264.843 27.8431 263.5 29.5 263.5H56.5C58.1569 263.5 59.5 264.843 59.5 266.5C59.5 268.157 58.1569 269.5 56.5 269.5H29.5C27.8431 269.5 26.5 268.157 26.5 266.5Z" fill="#DBDBDB" stroke="#DBDBDB" />
                    <path d="M61.5 266.5C61.5 264.843 62.8431 263.5 64.5 263.5H90.5C92.1569 263.5 93.5 264.843 93.5 266.5C93.5 268.157 92.1569 269.5 90.5 269.5H64.5C62.8431 269.5 61.5 268.157 61.5 266.5Z" fill="#DBDBDB" stroke="#DBDBDB" />
                    <path d="M26.5 276.5C26.5 274.843 27.8431 273.5 29.5 273.5H47.5C49.1569 273.5 50.5 274.843 50.5 276.5C50.5 278.157 49.1569 279.5 47.5 279.5H29.5C27.8431 279.5 26.5 278.157 26.5 276.5Z" fill="#DBDBDB" stroke="#DBDBDB" />
                    <path d="M53.5 276.5C53.5 274.843 54.8431 273.5 56.5 273.5H84.5C86.1569 273.5 87.5 274.843 87.5 276.5C87.5 278.157 86.1569 279.5 84.5 279.5H56.5C54.8431 279.5 53.5 278.157 53.5 276.5Z" fill="#DBDBDB" stroke="#DBDBDB" />
                    <path d="M26.5 286C26.5 284.067 28.067 282.5 30 282.5H56C57.933 282.5 59.5 284.067 59.5 286C59.5 287.933 57.933 289.5 56 289.5H30C28.067 289.5 26.5 287.933 26.5 286Z" fill="#DBDBDB" stroke="#DBDBDB" />
                    <path d="M61.5 286C61.5 284.067 63.067 282.5 65 282.5H87C88.933 282.5 90.5 284.067 90.5 286C90.5 287.933 88.933 289.5 87 289.5H65C63.067 289.5 61.5 287.933 61.5 286Z" fill="#DBDBDB" stroke="#DBDBDB" />
                    <path d="M26.5 295C26.5 293.067 28.067 291.5 30 291.5H47C48.933 291.5 50.5 293.067 50.5 295C50.5 296.933 48.933 298.5 47 298.5H30C28.067 298.5 26.5 296.933 26.5 295Z" fill="#DBDBDB" stroke="#DBDBDB" />
                    <path d="M53.5 295C53.5 293.067 55.067 291.5 57 291.5H74C75.933 291.5 77.5 293.067 77.5 295C77.5 296.933 75.933 298.5 74 298.5H57C55.067 298.5 53.5 296.933 53.5 295Z" fill="#DBDBDB" stroke="#DBDBDB" />
                    <rect x="26.5" y="316.5" width="17" height="7" rx="1.5" fill="#EEEEEA" stroke="#DBDBDB" />
                    <rect x="78.5" y="316.5" width="16" height="7" rx="1.5" fill="#EEEEEA" stroke="#DBDBDB" />
                    <path d="M94.5 328.5H26.5" stroke="black" stroke-linecap="round" />
                    <path d="M28.5 328.5C28.5 327.948 28.9477 327.5 29.5 327.5C30.0523 327.5 30.5 327.948 30.5 328.5C30.5 329.052 30.0523 329.5 29.5 329.5C28.9477 329.5 28.5 329.052 28.5 328.5Z" fill="#DBDBDB" stroke="#D2113A" />
                    <path d="M91.5 328.5C91.5 327.948 91.9477 327.5 92.5 327.5C93.0523 327.5 93.5 327.948 93.5 328.5C93.5 329.052 93.0523 329.5 92.5 329.5C91.9477 329.5 91.5 329.052 91.5 328.5Z" fill="#DBDBDB" stroke="#D2113A" />
                    <rect x="27" y="346" width="67" height="14" rx="7" stroke="#D2113A" strokeWidth="2" />
                  </g>
                  <g style={{ transform: `translateX(${anim ? '0' : '50rem'})`, transitionDelay: '2.25s' }}>
                    <rect x="124" y="213" width="125" height="77" rx="7" stroke="#1B1A1A" strokeWidth="2" />
                    <path d="M123 298C123 295.791 124.791 294 127 294H207C209.209 294 211 295.791 211 298C211 300.209 209.209 302 207 302H127C124.791 302 123 300.209 123 298Z" fill="#DBDBDB" />
                    <path d="M123 309C123 306.791 124.791 305 127 305H172C174.209 305 176 306.791 176 309C176 311.209 174.209 313 172 313H127C124.791 313 123 311.209 123 309Z" fill="#DBDBDB" />
                  </g>
                  <g style={{ transform: `translateX(${anim ? '0' : '50rem'})`, transitionDelay: '2.375s' }}>
                    <rect x="255" y="213" width="126" height="77" rx="7" stroke="#1B1A1A" strokeWidth="2" />
                    <path d="M254 298C254 295.791 255.791 294 258 294H339C341.209 294 343 295.791 343 298C343 300.209 341.209 302 339 302H258C255.791 302 254 300.209 254 298Z" fill="#DBDBDB" />
                    <path d="M254 309C254 306.791 255.791 305 258 305H303C305.209 305 307 306.791 307 309C307 311.209 305.209 313 303 313H258C255.791 313 254 311.209 254 309Z" fill="#DBDBDB" />
                  </g>
                  <g style={{ transform: `translateX(${anim ? '0' : '50rem'})`, transitionDelay: '2.625s' }}>
                    <path d="M124 371V346C124 341.582 127.582 338 132 338H241C245.418 338 249 341.582 249 346V371" stroke="#1B1A1A" strokeWidth="2" />
                  </g>
                  <g style={{ transform: `translateX(${anim ? '0' : '50rem'})`, transitionDelay: '2.75s' }}>
                    <path d="M254 371V346C254 341.582 257.582 338 262 338H371C375.418 338 379 341.582 379 346V371" stroke="#1B1A1A" strokeWidth="2" />
                  </g>
                  <g style={{ transform: `translateY(${anim ? '0' : '5rem'})`, transitionDelay: '3s' }}>
                    <path d="M237.5 300C237.323 300 237.175 299.936 237.055 299.808C236.935 299.68 236.875 299.522 236.875 299.333V298H235.625C235.448 298 235.3 297.936 235.18 297.809C235.06 297.681 235 297.522 235 297.333C235 297.144 235.06 296.986 235.18 296.858C235.3 296.73 235.448 296.667 235.625 296.667H236.875V295.333C236.875 295.144 236.935 294.986 237.055 294.858C237.175 294.73 237.323 294.667 237.5 294.667C237.677 294.667 237.826 294.73 237.946 294.858C238.065 294.986 238.125 295.144 238.125 295.333V296.667H239.375C239.552 296.667 239.701 296.73 239.821 296.858C239.94 296.986 240 297.144 240 297.333C240 297.522 239.94 297.681 239.821 297.809C239.701 297.936 239.552 298 239.375 298H238.125V299.333C238.125 299.522 238.065 299.68 237.946 299.808C237.826 299.936 237.677 300 237.5 300ZM234.375 308.667C234.031 308.667 233.737 308.536 233.492 308.275C233.247 308.014 233.125 307.7 233.125 307.333C233.125 306.967 233.247 306.653 233.492 306.391C233.737 306.13 234.031 306 234.375 306C234.719 306 235.013 306.13 235.257 306.391C235.502 306.653 235.625 306.967 235.625 307.333C235.625 307.7 235.502 308.014 235.257 308.275C235.013 308.536 234.719 308.667 234.375 308.667ZM240.625 308.667C240.281 308.667 239.987 308.536 239.742 308.275C239.497 308.014 239.375 307.7 239.375 307.333C239.375 306.967 239.497 306.653 239.742 306.391C239.987 306.13 240.281 306 240.625 306C240.969 306 241.263 306.13 241.508 306.391C241.753 306.653 241.875 306.967 241.875 307.333C241.875 307.7 241.753 308.014 241.508 308.275C241.263 308.536 240.969 308.667 240.625 308.667ZM234.375 305.333C233.896 305.333 233.534 305.114 233.289 304.675C233.044 304.236 233.042 303.8 233.281 303.367L234.125 301.733L231.875 296.667H231.25C231.073 296.667 230.925 296.603 230.805 296.475C230.685 296.347 230.625 296.189 230.625 296C230.625 295.811 230.685 295.653 230.805 295.525C230.925 295.397 231.073 295.333 231.25 295.333H232.266C232.38 295.333 232.49 295.367 232.594 295.433C232.698 295.5 232.776 295.594 232.828 295.717L235.344 301.333H239.719L241.953 297.017C242.005 296.905 242.081 296.819 242.18 296.758C242.279 296.697 242.385 296.667 242.5 296.667C242.74 296.667 242.919 296.778 243.039 297C243.159 297.222 243.161 297.444 243.047 297.667L240.812 301.967C240.698 302.189 240.547 302.361 240.359 302.483C240.172 302.605 239.958 302.667 239.719 302.667H235.062L234.375 304H241.25C241.427 304 241.575 304.064 241.695 304.191C241.815 304.319 241.875 304.478 241.875 304.667C241.875 304.855 241.815 305.014 241.695 305.141C241.575 305.269 241.427 305.333 241.25 305.333H234.375Z" fill="#D2113A" />
                  </g>
                  <g style={{ transform: `translateY(${anim ? '0' : '5rem'})`, transitionDelay: '3.125s' }}>
                    <path d="M368 300C367.811 300 367.653 299.936 367.526 299.808C367.398 299.68 367.334 299.522 367.334 299.333V298H366C365.811 298 365.653 297.936 365.526 297.809C365.398 297.681 365.334 297.522 365.334 297.333C365.334 297.144 365.398 296.986 365.526 296.858C365.653 296.73 365.811 296.667 366 296.667H367.334V295.333C367.334 295.144 367.398 294.986 367.526 294.858C367.653 294.73 367.811 294.667 368 294.667C368.189 294.667 368.348 294.73 368.476 294.858C368.603 294.986 368.667 295.144 368.667 295.333V296.667H370C370.189 296.667 370.348 296.73 370.476 296.858C370.603 296.986 370.667 297.144 370.667 297.333C370.667 297.522 370.603 297.681 370.476 297.809C370.348 297.936 370.189 298 370 298H368.667V299.333C368.667 299.522 368.603 299.68 368.476 299.808C368.348 299.936 368.189 300 368 300ZM364.667 308.667C364.3 308.667 363.987 308.536 363.726 308.275C363.464 308.014 363.334 307.7 363.334 307.333C363.334 306.967 363.464 306.653 363.726 306.391C363.987 306.13 364.3 306 364.667 306C365.034 306 365.347 306.13 365.608 306.391C365.87 306.653 366 306.967 366 307.333C366 307.7 365.87 308.014 365.608 308.275C365.347 308.536 365.034 308.667 364.667 308.667ZM371.334 308.667C370.967 308.667 370.653 308.536 370.392 308.275C370.131 308.014 370 307.7 370 307.333C370 306.967 370.131 306.653 370.392 306.391C370.653 306.13 370.967 306 371.334 306C371.7 306 372.014 306.13 372.276 306.391C372.537 306.653 372.667 306.967 372.667 307.333C372.667 307.7 372.537 308.014 372.276 308.275C372.014 308.536 371.7 308.667 371.334 308.667ZM364.667 305.333C364.156 305.333 363.77 305.114 363.509 304.675C363.248 304.236 363.245 303.8 363.5 303.367L364.4 301.733L362 296.667H361.334C361.145 296.667 360.987 296.603 360.859 296.475C360.731 296.347 360.667 296.189 360.667 296C360.667 295.811 360.731 295.653 360.859 295.525C360.987 295.397 361.145 295.333 361.334 295.333H362.417C362.539 295.333 362.656 295.367 362.767 295.433C362.878 295.5 362.961 295.594 363.017 295.717L365.7 301.333H370.367L372.75 297.017C372.806 296.905 372.887 296.819 372.992 296.758C373.098 296.697 373.211 296.667 373.334 296.667C373.589 296.667 373.781 296.778 373.909 297C374.037 297.222 374.039 297.444 373.917 297.667L371.534 301.967C371.411 302.189 371.25 302.361 371.05 302.483C370.85 302.605 370.623 302.667 370.367 302.667H365.4L364.667 304H372C372.189 304 372.347 304.064 372.475 304.191C372.603 304.319 372.667 304.478 372.667 304.667C372.667 304.855 372.603 305.014 372.475 305.141C372.347 305.269 372.189 305.333 372 305.333H364.667Z" fill="#D2113A" />
                  </g>
                </svg>
              )}

              {type === 'complex' && (
                <svg viewBox="0 0 426 494" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.image}>
                  <rect x="11" y="412" width="75" height="74" rx="7" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="417" y="411" width="74" height="74" rx="7" transform="rotate(90 417 411)" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="94" y="412" width="75" height="74" rx="7" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="251" y="411" width="75" height="74" rx="7" transform="rotate(90 251 411)" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="334" y="411" width="75" height="74" rx="7" transform="rotate(90 334 411)" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="11" y="330" width="75" height="74" rx="7" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="417" y="329" width="74" height="74" rx="7" transform="rotate(90 417 329)" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="94" y="330" width="75" height="74" rx="7" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="251" y="329" width="75" height="74" rx="7" transform="rotate(90 251 329)" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="334" y="329" width="75" height="74" rx="7" transform="rotate(90 334 329)" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="11" y="248" width="75" height="74" rx="7" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="417" y="247" width="74" height="74" rx="7" transform="rotate(90 417 247)" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="94" y="248" width="75" height="74" rx="7" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="251" y="247" width="75" height="74" rx="7" transform="rotate(90 251 247)" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="334" y="247" width="75" height="74" rx="7" transform="rotate(90 334 247)" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="11" y="166" width="75" height="74" rx="7" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="417" y="165" width="74" height="74" rx="7" transform="rotate(90 417 165)" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="94" y="166" width="75" height="74" rx="7" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="251" y="165" width="75" height="74" rx="7" transform="rotate(90 251 165)" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="334" y="165" width="75" height="74" rx="7" transform="rotate(90 334 165)" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="11" y="84" width="75" height="74" rx="7" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="417" y="83" width="74" height="74" rx="7" transform="rotate(90 417 83)" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="94" y="84" width="75" height="74" rx="7" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="251" y="83" width="75" height="74" rx="7" transform="rotate(90 251 83)" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="334" y="83" width="75" height="74" rx="7" transform="rotate(90 334 83)" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="11" y="2" width="75" height="74" rx="7" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="417" y="1" width="74" height="74" rx="7" transform="rotate(90 417 1)" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="94" y="2" width="75" height="74" rx="7" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="251" y="1" width="75" height="74" rx="7" transform="rotate(90 251 1)" stroke="#DBDBDB" strokeWidth="2" />
                  <rect x="334" y="1" width="75" height="74" rx="7" transform="rotate(90 334 1)" stroke="#DBDBDB" strokeWidth="2" />
                  <mask id="path-31-inside-1_104_60" fill="white">
                    <path d="M426 41L426 486C426 490.418 422.418 494 418 494L8.00001 494C3.58173 494 1.08729e-05 490.418 1.1066e-05 486L3.05176e-05 41L426 41Z" />
                  </mask>
                  <path d="M428 41L428 486C428 491.523 423.523 496 418 496L418 492C421.314 492 424 489.314 424 486L424 41L428 41ZM8.00001 496C2.47716 496 -1.99999 491.523 -1.99999 486L-1.99997 41L2.00003 41L2.00001 486C2.00001 489.314 4.6863 492 8.00001 492L8.00001 496ZM3.05176e-05 41L426 41L3.05176e-05 41ZM428 486C428 491.523 423.523 496 418 496L8.00001 496C2.47716 496 -1.99999 491.523 -1.99999 486L2.00001 486C2.00001 489.314 4.6863 492 8.00001 492L418 492C421.314 492 424 489.314 424 486L428 486Z" fill="#1B1A1A" mask="url(#path-31-inside-1_104_60)" />
                  <rect x="258.5" y="412.5" width="74" height="73" rx="6.5" stroke="#D2113A" strokeWidth="3" />
                  <rect x="258.5" y="329.5" width="74" height="73" rx="6.5" stroke="#D2113A" strokeWidth="3" />
                  <rect x="341.5" y="412.5" width="74" height="73" rx="6.5" stroke="#D2113A" strokeWidth="3" />
                  <rect x="341.5" y="329.5" width="74" height="73" rx="6.5" stroke="#D2113A" strokeWidth="3" />
                  <rect x="94.5" y="331.5" width="73" height="74" rx="6.5" stroke="#D2113A" strokeWidth="3" />
                  <rect x="11.5" y="248.5" width="73" height="74" rx="6.5" stroke="#D2113A" strokeWidth="3" />
                  <rect x="177.5" y="331.5" width="73" height="74" rx="6.5" stroke="#D2113A" strokeWidth="3" />
                  <rect x="94.5" y="248.5" width="73" height="74" rx="6.5" stroke="#D2113A" strokeWidth="3" />
                  <rect x="260.5" y="247.5" width="73" height="74" rx="6.5" stroke="#1B1A1A" strokeWidth="3" />
                  <rect x="177.5" y="247.5" width="73" height="74" rx="6.5" stroke="#1B1A1A" strokeWidth="3" />
                  <rect x="343.5" y="247.5" width="73" height="74" rx="6.5" stroke="#1B1A1A" strokeWidth="3" />
                  <rect x="260.5" y="164.5" width="73" height="74" rx="6.5" stroke="#1B1A1A" strokeWidth="3" />
                  <rect x="85.5" y="329.5" width="73" height="73" rx="6.5" transform="rotate(90 85.5 329.5)" stroke="#1B1A1A" strokeWidth="3" />
                  <rect x="251.5" y="411.5" width="73" height="73" rx="6.5" transform="rotate(90 251.5 411.5)" stroke="#1B1A1A" strokeWidth="3" />
                  <rect x="85.5" y="411.5" width="74" height="73" rx="6.5" transform="rotate(90 85.5 411.5)" stroke="#1B1A1A" strokeWidth="3" />
                  <rect x="168.5" y="411.5" width="74" height="73" rx="6.5" transform="rotate(90 168.5 411.5)" stroke="#1B1A1A" strokeWidth="3" />
                  <rect x="85.5" y="82.5" width="73" height="73" rx="6.5" transform="rotate(90 85.5 82.5)" stroke="#1B1A1A" strokeWidth="3" />
                  <rect x="251.5" y="164.5" width="73" height="73" rx="6.5" transform="rotate(90 251.5 164.5)" stroke="#1B1A1A" strokeWidth="3" />
                  <rect x="85.5" y="164.5" width="74" height="73" rx="6.5" transform="rotate(90 85.5 164.5)" stroke="#1B1A1A" strokeWidth="3" />
                  <rect x="168.5" y="164.5" width="74" height="73" rx="6.5" transform="rotate(90 168.5 164.5)" stroke="#1B1A1A" strokeWidth="3" />
                </svg>
              )}

              {type === 'context' && (
                <svg viewBox="0 0 635 398" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.image}>
                  <path d="M46 1H589C599.493 1 608 9.50659 608 20V363H27V20C27 9.50659 35.5066 1 46 1Z" stroke="#1B1A1A" strokeWidth="2" />
                  <rect x="47" y="296" width="423" height="66" fill="#DBDBDB" />
                  <path d="M20 397H615C625.493 397 634 388.493 634 378V363H1V378C1 388.493 9.50659 397 20 397Z" stroke="#1B1A1A" strokeWidth="2" />
                  <path d="M245 1H375V8C375 10.7614 372.761 13 370 13H250C247.239 13 245 10.7614 245 8V1Z" stroke="#1B1A1A" strokeWidth="2" />
                  <rect x="48" y="26" width="90" height="40" rx="7" stroke="#1B1A1A" strokeWidth="2" />
                  <rect x="466" y="30" width="114" height="30" rx="15" stroke="#1B1A1A" strokeWidth="2" />
                  <rect x="176.75" y="43.75" width="50.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                  <rect x="244.75" y="43.75" width="48.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                  <rect x="312.75" y="43.75" width="48.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                  <rect x="382.75" y="43.75" width="47.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
                  <rect x="48.5" y="88.5" width="531" height="56" rx="6.5" stroke="#D2113A" strokeWidth="3" />
                  <rect x="47" y="162" width="261" height="29" rx="8" fill="#DBDBDB" />
                  <rect x="47" y="200" width="423" height="19" rx="8" fill="#DBDBDB" />
                  <rect x="47" y="224" width="423" height="19" rx="8" fill="#DBDBDB" />
                  <rect x="47" y="247" width="354" height="20" rx="8" fill="#DBDBDB" />
                  <rect x="497.5" y="153.5" width="82" height="181" rx="6.5" stroke="#D2113A" strokeWidth="3" />
                </svg>
              )}

              {type === 'target' && (
                <svg viewBox="0 0 541 540" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.image}>
                  <path d="M528.5 270C528.5 325.537 510.544 379.586 477.312 424.083C444.08 468.58 397.352 501.14 344.099 516.906C290.847 532.672 233.924 530.799 181.824 511.566C129.724 492.332 85.2376 456.77 55.003 410.184C24.7683 363.598 10.4055 308.486 14.0573 253.069C17.709 197.652 39.1796 144.9 75.2659 102.685C111.352 60.4691 160.12 31.0518 214.294 18.8215C268.468 6.59116 325.144 12.2034 375.867 34.8209" stroke="#DBDBDB" />
                  <path d="M409.079 201.548C419.39 222.347 424.87 245.207 425.107 268.421C425.345 291.634 420.336 314.602 410.453 335.608C400.571 356.614 386.07 375.116 368.035 389.733C349.999 404.349 328.894 414.703 306.297 420.019C283.699 425.336 260.192 425.479 237.531 420.438C214.871 415.396 193.642 405.301 175.43 390.905C157.218 376.509 142.493 358.184 132.356 337.3C122.218 316.415 116.93 293.511 116.885 270.296" stroke="#1B1A1A" strokeDasharray="2 2" />
                  <path d="M2.51048 246.684C7.41823 190.17 30.0339 136.645 67.1363 93.7336C104.239 50.8222 153.936 20.7127 209.149 7.69355C264.362 -5.32555 322.275 -0.590265 374.64 21.2249C427.005 43.0401 471.15 80.8227 500.789 129.191C530.428 177.56 544.049 234.047 539.711 290.608C535.373 347.169 513.298 400.92 476.63 444.203C439.962 487.486 390.571 518.095 335.492 531.67C280.413 545.245 222.455 541.093 169.873 519.807" stroke="#1B1A1A" />
                  <path d="M434.5 270C434.5 360.852 361.073 434.5 270.5 434.5C179.927 434.5 106.5 360.852 106.5 270C106.5 179.148 179.927 105.5 270.5 105.5C361.073 105.5 434.5 179.148 434.5 270Z" stroke="#DBDBDB" />
                  <path d="M119.392 370.481C103.523 347.058 93.4218 320.285 89.8989 292.306C86.376 264.328 89.5291 235.922 99.1054 209.365C108.682 182.809 124.415 158.84 145.045 139.38C165.675 119.921 190.628 105.512 217.904 97.3081C245.179 89.1047 274.019 87.3353 302.11 92.1419C330.202 96.9485 356.764 108.197 379.668 124.986C402.571 141.775 421.179 163.637 434.001 188.82C446.822 214.002 453.5 241.805 453.5 270" stroke="#D2113A" strokeDasharray="4 4" />
                  <rect x="180" y="89" width="182" height="362" rx="19" fill="#EEEEEA" stroke="#1B1A1A" strokeWidth="2" />
                  <path d="M251 89H291V96C291 98.7614 288.761 101 286 101H256C253.239 101 251 98.7614 251 96V89Z" stroke="#1B1A1A" strokeWidth="2" />
                  <mask id="path-8-inside-1_104_109" fill="white">
                    <path d="M430.145 248C430.145 268.202 424.154 287.951 412.93 304.748C401.707 321.546 385.754 334.638 367.089 342.369C348.425 350.1 327.887 352.123 308.073 348.182C288.259 344.24 270.058 334.512 255.773 320.227L304.802 271.198C309.39 275.786 315.236 278.911 321.6 280.177C327.964 281.443 334.56 280.793 340.555 278.31C346.55 275.827 351.673 271.622 355.278 266.227C358.883 260.831 360.807 254.488 360.807 248H430.145Z" />
                  </mask>
                  <path d="M430.145 248C430.145 268.202 424.154 287.951 412.93 304.748C401.707 321.546 385.754 334.638 367.089 342.369C348.425 350.1 327.887 352.123 308.073 348.182C288.259 344.24 270.058 334.512 255.773 320.227L304.802 271.198C309.39 275.786 315.236 278.911 321.6 280.177C327.964 281.443 334.56 280.793 340.555 278.31C346.55 275.827 351.673 271.622 355.278 266.227C358.883 260.831 360.807 254.488 360.807 248H430.145Z" fill="#EEEEEA" stroke="#1B1A1A" strokeWidth="4" mask="url(#path-8-inside-1_104_109)" />
                  <mask id="path-9-inside-2_104_109" fill="white">
                    <path d="M253.184 317.542C237.448 300.612 227.918 278.845 226.154 255.799C224.389 232.753 230.493 209.789 243.468 190.66L300.48 229.333C296.256 235.56 294.269 243.036 294.844 250.539C295.418 258.042 298.52 265.128 303.643 270.639L253.184 317.542Z" />
                  </mask>
                  <path d="M253.184 317.542C237.448 300.612 227.918 278.845 226.154 255.799C224.389 232.753 230.493 209.789 243.468 190.66L300.48 229.333C296.256 235.56 294.269 243.036 294.844 250.539C295.418 258.042 298.52 265.128 303.643 270.639L253.184 317.542Z" fill="#EEEEEA" stroke="#1B1A1A" strokeWidth="4" mask="url(#path-9-inside-2_104_109)" />
                  <mask id="path-10-inside-3_104_109" fill="white">
                    <path d="M245.691 187.512C256.473 172.841 270.979 161.319 287.709 154.137L314.701 217.018C309.179 219.389 304.391 223.192 300.832 228.034L245.691 187.512Z" />
                  </mask>
                  <path d="M245.691 187.512C256.473 172.841 270.979 161.319 287.709 154.137L314.701 217.018C309.179 219.389 304.391 223.192 300.832 228.034L245.691 187.512Z" fill="#EEEEEA" stroke="#1B1A1A" strokeWidth="4" mask="url(#path-10-inside-3_104_109)" />
                  <path d="M287.567 146.777C303.891 140.256 321.55 137.78 339.039 139.56C356.527 141.341 373.325 147.324 388 157C402.676 166.676 414.793 179.758 423.32 195.131C431.846 210.503 436.528 227.709 436.966 245.282L373.657 246.861C373.474 239.498 371.512 232.289 367.939 225.848C364.367 219.407 359.289 213.925 353.14 209.871C346.991 205.816 339.953 203.309 332.625 202.563C325.298 201.817 317.898 202.855 311.058 205.587L287.567 146.777Z" fill="#D2113A" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M502.923 49.6157H396.77V107.308H415.23V126.346L434.269 107.308H502.923V49.6157Z" fill="#EEEEEA" />
                  <path d="M396.77 49.6157V48.6157C396.217 48.6157 395.77 49.0634 395.77 49.6157H396.77ZM502.923 49.6157H503.923C503.923 49.0634 503.476 48.6157 502.923 48.6157V49.6157ZM396.77 107.308H395.77C395.77 107.86 396.217 108.308 396.77 108.308V107.308ZM415.23 107.308H416.23C416.23 106.756 415.783 106.308 415.23 106.308V107.308ZM415.23 126.346H414.23C414.23 126.751 414.474 127.116 414.848 127.27C415.221 127.425 415.652 127.34 415.938 127.054L415.23 126.346ZM434.269 107.308V106.308C434.004 106.308 433.749 106.413 433.562 106.601L434.269 107.308ZM502.923 107.308V108.308C503.476 108.308 503.923 107.86 503.923 107.308H502.923ZM396.77 50.6157H502.923V48.6157H396.77V50.6157ZM397.77 107.308V49.6157H395.77V107.308H397.77ZM415.23 106.308H396.77V108.308H415.23V106.308ZM414.23 107.308V126.346H416.23V107.308H414.23ZM415.938 127.054L434.976 108.015L433.562 106.601L414.523 125.639L415.938 127.054ZM502.923 106.308H434.269V108.308H502.923V106.308ZM501.923 49.6157V107.308H503.923V49.6157H501.923Z" fill="#1B1A1A" />
                  <path d="M425.819 69.8504C426.119 68.9291 427.422 68.9291 427.721 69.8504L429.396 75.0025C429.529 75.4145 429.913 75.6935 430.347 75.6935H435.764C436.733 75.6935 437.135 76.9331 436.352 77.5025L431.969 80.6867C431.618 80.9414 431.472 81.3927 431.606 81.8048L433.28 86.9569C433.579 87.8782 432.525 88.6443 431.741 88.0749L427.358 84.8907C427.008 84.6361 426.533 84.6361 426.183 84.8907L421.8 88.0749C421.016 88.6443 419.962 87.8782 420.261 86.9569L421.935 81.8048C422.069 81.3927 421.922 80.9414 421.572 80.6867L417.189 77.5025C416.406 76.9331 416.808 75.6935 417.777 75.6935H423.194C423.628 75.6935 424.011 75.4145 424.145 75.0025L425.819 69.8504Z" fill="#D2113A" />
                  <path d="M448.896 69.8503C449.195 68.929 450.498 68.929 450.798 69.8503L452.472 75.0025C452.606 75.4145 452.99 75.6934 453.423 75.6934H458.84C459.809 75.6934 460.212 76.9331 459.428 77.5025L455.045 80.6867C454.695 80.9413 454.548 81.3927 454.682 81.8047L456.356 86.9568C456.655 87.8781 455.601 88.6443 454.817 88.0749L450.434 84.8907C450.084 84.636 449.609 84.636 449.259 84.8907L444.876 88.0749C444.092 88.6443 443.038 87.8781 443.337 86.9568L445.011 81.8047C445.145 81.3927 444.999 80.9413 444.648 80.6867L440.265 77.5025C439.482 76.9331 439.884 75.6934 440.853 75.6934H446.27C446.704 75.6934 447.088 75.4145 447.222 75.0025L448.896 69.8503Z" fill="#D2113A" />
                  <path d="M471.972 69.8504C472.271 68.9291 473.574 68.9291 473.874 69.8504L475.548 75.0025C475.682 75.4145 476.066 75.6935 476.499 75.6935H481.916C482.885 75.6935 483.288 76.9331 482.504 77.5025L478.121 80.6867C477.771 80.9414 477.624 81.3927 477.758 81.8048L479.432 86.9569C479.731 87.8782 478.677 88.6443 477.893 88.0749L473.511 84.8907C473.16 84.6361 472.685 84.6361 472.335 84.8907L467.952 88.0749C467.169 88.6443 466.114 87.8782 466.413 86.9569L468.088 81.8048C468.221 81.3927 468.075 80.9414 467.724 80.6867L463.342 77.5025C462.558 76.9331 462.961 75.6935 463.929 75.6935H469.347C469.78 75.6935 470.164 75.4145 470.298 75.0025L471.972 69.8504Z" fill="#D2113A" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.999817 491.538L231.769 491.538L231.769 413.077L213.308 413.077L213.308 394.615L194.847 413.077L0.999824 413.077L0.999817 491.538Z" fill="#EEEEEA" />
                  <path d="M231.769 491.538L231.769 492.538C232.321 492.538 232.769 492.091 232.769 491.538L231.769 491.538ZM0.999817 491.538L-0.000183105 491.538C-0.000183154 492.091 0.447532 492.538 0.999817 492.538L0.999817 491.538ZM231.769 413.077L232.769 413.077C232.769 412.525 232.321 412.077 231.769 412.077L231.769 413.077ZM213.308 413.077L212.308 413.077C212.308 413.629 212.756 414.077 213.308 414.077L213.308 413.077ZM213.308 394.615L214.308 394.615C214.308 394.211 214.064 393.846 213.691 393.691C213.317 393.537 212.887 393.622 212.601 393.908L213.308 394.615ZM194.847 413.077L194.847 414.077C195.112 414.077 195.366 413.971 195.554 413.784L194.847 413.077ZM0.999824 413.077L0.999824 412.077C0.447539 412.077 -0.000176198 412.525 -0.000176246 413.077L0.999824 413.077ZM231.769 490.538L0.999817 490.538L0.999817 492.538L231.769 492.538L231.769 490.538ZM230.769 413.077L230.769 491.538L232.769 491.538L232.769 413.077L230.769 413.077ZM213.308 414.077L231.769 414.077L231.769 412.077L213.308 412.077L213.308 414.077ZM214.308 413.077L214.308 394.615L212.308 394.615L212.308 413.077L214.308 413.077ZM212.601 393.908L194.139 412.37L195.554 413.784L214.015 395.322L212.601 393.908ZM0.999824 414.077L194.847 414.077L194.847 412.077L0.999824 412.077L0.999824 414.077ZM1.99982 491.538L1.99982 413.077L-0.000176246 413.077L-0.000183105 491.538L1.99982 491.538Z" fill="#1B1A1A" />
                  <mask id="mask0_104_109" mask-type="alpha" maskUnits="userSpaceOnUse" x="29" y="439" width="30" height="26">
                    <path d="M38.375 441C34.5781 441 31.5 444.078 31.5 447.875C31.5 454.75 39.625 461 44 462.454C48.375 461 56.5 454.75 56.5 447.875C56.5 444.078 53.4219 441 49.625 441C47.3 441 45.2438 442.154 44 443.921C43.3661 443.018 42.5239 442.281 41.5447 441.773C40.5656 441.264 39.4783 440.999 38.375 441Z" fill="white" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </mask>
                  <g mask="url(#mask0_104_109)">
                    <path d="M29 436H59V466H29V436Z" fill="#D2113A" />
                  </g>
                  <path d="M69 441C69 438.791 70.7909 437 73 437H202C204.209 437 206 438.791 206 441V447C206 449.209 204.209 451 202 451H73C70.7909 451 69 449.209 69 447V441Z" fill="#DBDBDB" />
                  <path d="M69 459C69 456.791 70.7909 455 73 455H170C172.209 455 174 456.791 174 459V464C174 466.209 172.209 468 170 468H73C70.7909 468 69 466.209 69 464V459Z" fill="#DBDBDB" />
                </svg>
              )}

            </div>

          </div>
        </div>
      </section >
      <ServiceOffer animDelay={offerDelays[type]} />
    </>
  )
}
