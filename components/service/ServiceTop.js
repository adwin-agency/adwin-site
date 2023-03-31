import cn from 'classnames'
import styles from './ServiceTop.module.scss'
import details from '../../data/details'
import useAnim from '../../helpers/useAnim'

export default function ServiceTop({ type }) {
  const { heading, desc } = details[type]

  const { anim, animRef } = useAnim()

  return (
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

          {type === 'landing' && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 616 541" fill="none" className={styles.image}>
              <path d="M232.5 2.5H368.5V9C368.5 11.4853 366.485 13.5 364 13.5H237C234.515 13.5 232.5 11.4853 232.5 9V2.5Z" stroke="#1B1A1A" strokeWidth="3"
                style={{ transform: `translateY(${anim ? '0' : '5rem'})`, transitionDelay: '1.5s' }} />

              <rect x="26.5" y="29.5" width="93" height="40" rx="6.5" stroke="#D2113A" strokeWidth="3"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '1.5s' }} />
              <rect x="463.5" y="33.5" width="119" height="30" rx="15" stroke="#D2113A" strokeWidth="3"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '1.5s' }} />
              <rect x="160.75" y="46.75" width="51.5" height="1.5" stroke="#D2113A" strokeWidth="1.5"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '1.5s' }} />
              <rect x="231.75" y="46.75" width="51.5" height="1.5" stroke="#D2113A" strokeWidth="1.5"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '1.5s' }} />
              <rect x="302.75" y="46.75" width="51.5" height="1.5" stroke="#D2113A" strokeWidth="1.5"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '1.5s' }} />
              <rect x="375.75" y="46.75" width="51.5" height="1.5" stroke="#D2113A" strokeWidth="1.5"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '1.5s' }} />

              <rect x="26.5" y="95.5" width="556" height="177" rx="6.5" stroke="#D2113A" strokeWidth="3"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '1.75s' }} />

              <rect x="26.5" y="302.5" width="180" height="117" rx="6.5" stroke="#D2113A" strokeWidth="3"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '2s' }} />
              <rect x="214.5" y="302.5" width="180" height="117" rx="6.5" stroke="#D2113A" strokeWidth="3"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '2s' }} />
              <rect x="402.5" y="302.5" width="180" height="117" rx="6.5" stroke="#D2113A" strokeWidth="3"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '2s' }} />

              <path d="M2 541V22C2 10.9543 10.9543 2 22 2H594C605.046 2 614 10.9543 614 22V541" stroke="#1B1A1A" strokeWidth="3" />

              <path d="M26 541V436C26 431.582 29.5817 428 34 428H387C391.418 428 395 431.582 395 436V541" stroke="#D2113A" strokeWidth="3"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '2.25s' }} />
              <path d="M404 541V436C404 431.582 407.582 428 412 428H575C579.418 428 583 431.582 583 436V541" stroke="#D2113A" strokeWidth="3"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '2.25s' }} />
            </svg>
          )}

          {type === 'corporate' && (
            <svg viewBox="0 0 1188 541" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.image}>
              <path d="M660 1H763V5C763 7.76142 760.761 10 758 10H665C662.239 10 660 7.76142 660 5V1Z" stroke="#1B1A1A" strokeWidth="2" />
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
          )}

          {type === 'store' && (
            <svg viewBox="0 0 672 565" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.image}>
              <mask id="path-1-inside-1_428_3987" fill="white">
                <path d="M60 20C60 8.95431 68.9543 0 80 0H652C663.046 0 672 8.9543 672 20V368C672 379.046 663.046 388 652 388H60V20Z" />
              </mask>
              <path d="M60 20C60 8.95431 68.9543 0 80 0H652C663.046 0 672 8.9543 672 20V368C672 379.046 663.046 388 652 388H60V20Z" fill="#EEEEEA" />
              <path d="M58 20C58 7.84974 67.8497 -2 80 -2H652C664.15 -2 674 7.84974 674 20H670C670 10.0589 661.941 2 652 2H80C70.0589 2 62 10.0589 62 20H58ZM674 368C674 380.15 664.15 390 652 390H58L62 386H652C661.941 386 670 377.941 670 368H674ZM58 390V20C58 7.84974 67.8497 -2 80 -2V2C70.0589 2 62 10.0589 62 20V386L58 390ZM652 -2C664.15 -2 674 7.84974 674 20V368C674 380.15 664.15 390 652 390V386C661.941 386 670 377.941 670 368V20C670 10.0589 661.941 2 652 2V-2Z" fill="#DBDBDB" mask="url(#path-1-inside-1_428_3987)" />
              <path d="M290 1H427V8C427 10.7614 424.761 13 422 13H295C292.239 13 290 10.7614 290 8V1Z" stroke="#DBDBDB" strokeWidth="2" />
              <mask id="path-4-inside-2_428_3987" fill="white">
                <path d="M30 47C30 35.9543 38.9543 27 50 27H622C633.046 27 642 35.9543 642 47V395C642 406.046 633.046 415 622 415H30V47Z" />
              </mask>
              <path d="M30 47C30 35.9543 38.9543 27 50 27H622C633.046 27 642 35.9543 642 47V395C642 406.046 633.046 415 622 415H30V47Z" fill="#EEEEEA" />
              <path d="M28 47C28 34.8497 37.8497 25 50 25H622C634.15 25 644 34.8497 644 47H640C640 37.0589 631.941 29 622 29H50C40.0589 29 32 37.0589 32 47H28ZM644 395C644 407.15 634.15 417 622 417H28L32 413H622C631.941 413 640 404.941 640 395H644ZM28 417V47C28 34.8497 37.8497 25 50 25V29C40.0589 29 32 37.0589 32 47V413L28 417ZM622 25C634.15 25 644 34.8497 644 47V395C644 407.15 634.15 417 622 417V413C631.941 413 640 404.941 640 395V47C640 37.0589 631.941 29 622 29V25Z" fill="#DBDBDB" mask="url(#path-4-inside-2_428_3987)" />
              <path d="M260 28H397V35C397 37.7614 394.761 40 392 40H265C262.239 40 260 37.7614 260 35V28Z" stroke="#DBDBDB" strokeWidth="2" />
              <mask id="path-7-inside-3_428_3987" fill="white">
                <path d="M0 80C0 68.9543 8.95431 60 20 60H592C603.046 60 612 68.9543 612 80V562H0V80Z" />
              </mask>
              <path d="M0 80C0 68.9543 8.95431 60 20 60H592C603.046 60 612 68.9543 612 80V562H0V80Z" fill="#EEEEEA" />
              <path d="M-2 80C-2 67.8497 7.84974 58 20 58H592C604.15 58 614 67.8497 614 80H610C610 70.0589 601.941 62 592 62H20C10.0589 62 2 70.0589 2 80H-2ZM612 562H0H612ZM-2 562V80C-2 67.8497 7.84974 58 20 58V62C10.0589 62 2 70.0589 2 80V562H-2ZM592 58C604.15 58 614 67.8497 614 80V562H610V80C610 70.0589 601.941 62 592 62V58Z" fill="#1B1A1A" mask="url(#path-7-inside-3_428_3987)" />
              <path d="M230 61H367V68C367 70.7614 364.761 73 362 73H235C232.239 73 230 70.7614 230 68V61Z" stroke="#1B1A1A" strokeWidth="2" />
              <rect x="24" y="88" width="94" height="41" rx="7" stroke="#1B1A1A" strokeWidth="2" />
              <rect x="158.75" y="105.75" width="51.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
              <rect x="229.75" y="105.75" width="51.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
              <rect x="300.75" y="105.75" width="51.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
              <rect x="373.75" y="105.75" width="51.5" height="1.5" stroke="#1B1A1A" strokeWidth="1.5" />
              <rect x="506.726" y="91.4142" width="14.7251" height="14.7251" rx="7.36254" transform="rotate(45 506.726 91.4142)" stroke="#1B1A1A" strokeWidth="2" />
              <rect x="512.639" y="107.371" width="8.883" height="1" transform="rotate(45 512.639 107.371)" stroke="#1B1A1A" />
              <rect x="24" y="154" width="557" height="148" rx="7" stroke="#D2113A" strokeWidth="2" />
              <path d="M23.5 328C23.5 323.858 26.8579 320.5 31 320.5H150C154.142 320.5 157.5 323.858 157.5 328V561.5H23.5V328Z" fill="#EEEEEA" stroke="#DBDBDB" />
              <path d="M186 452C186 448.686 188.686 446 192 446H315C318.314 446 321 448.686 321 452C321 455.314 318.314 458 315 458H192C188.686 458 186 455.314 186 452Z" fill="#DBDBDB" />
              <path d="M387 452C387 448.686 389.686 446 393 446H516C519.314 446 522 448.686 522 452C522 455.314 519.314 458 516 458H393C389.686 458 387 455.314 387 452Z" fill="#DBDBDB" />
              <path d="M186 469C186 465.686 188.686 463 192 463H261C264.314 463 267 465.686 267 469C267 472.314 264.314 475 261 475H192C188.686 475 186 472.314 186 469Z" fill="#DBDBDB" />
              <path d="M38.5 351C38.5 347.962 40.9624 345.5 44 345.5H83C86.0376 345.5 88.5 347.962 88.5 351C88.5 354.038 86.0376 356.5 83 356.5H44C40.9624 356.5 38.5 354.038 38.5 351Z" fill="#D2113A" stroke="#DBDBDB" />
              <path d="M38.5 405C38.5 401.962 40.9624 399.5 44 399.5H83C86.0376 399.5 88.5 401.962 88.5 405C88.5 408.038 86.0376 410.5 83 410.5H44C40.9624 410.5 38.5 408.038 38.5 405Z" fill="#DBDBDB" stroke="#DBDBDB" />
              <path d="M38.5 433C38.5 429.962 40.9624 427.5 44 427.5H83C86.0376 427.5 88.5 429.962 88.5 433C88.5 436.038 86.0376 438.5 83 438.5H44C40.9624 438.5 38.5 436.038 38.5 433Z" fill="#DBDBDB" stroke="#DBDBDB" />
              <path d="M91.5 351C91.5 347.962 93.9624 345.5 97 345.5H136C139.038 345.5 141.5 347.962 141.5 351C141.5 354.038 139.038 356.5 136 356.5H97C93.9624 356.5 91.5 354.038 91.5 351Z" fill="#DBDBDB" stroke="#DBDBDB" />
              <path d="M91.5 405C91.5 401.962 93.9624 399.5 97 399.5H136C139.038 399.5 141.5 401.962 141.5 405C141.5 408.038 139.038 410.5 136 410.5H97C93.9624 410.5 91.5 408.038 91.5 405Z" fill="#DBDBDB" stroke="#DBDBDB" />
              <path d="M91.5 433C91.5 429.962 93.9624 427.5 97 427.5H130C133.038 427.5 135.5 429.962 135.5 433C135.5 436.038 133.038 438.5 130 438.5H97C93.9624 438.5 91.5 436.038 91.5 433Z" fill="#DBDBDB" stroke="#DBDBDB" />
              <path d="M38.5 365C38.5 361.962 40.9624 359.5 44 359.5H71C74.0376 359.5 76.5 361.962 76.5 365C76.5 368.038 74.0376 370.5 71 370.5H44C40.9624 370.5 38.5 368.038 38.5 365Z" fill="#DBDBDB" stroke="#DBDBDB" />
              <path d="M38.5 419C38.5 415.962 40.9624 413.5 44 413.5H71C74.0376 413.5 76.5 415.962 76.5 419C76.5 422.038 74.0376 424.5 71 424.5H44C40.9624 424.5 38.5 422.038 38.5 419Z" fill="#DBDBDB" stroke="#DBDBDB" />
              <path d="M38.5 447C38.5 443.962 40.9624 441.5 44 441.5H71C74.0376 441.5 76.5 443.962 76.5 447C76.5 450.038 74.0376 452.5 71 452.5H44C40.9624 452.5 38.5 450.038 38.5 447Z" fill="#DBDBDB" stroke="#DBDBDB" />
              <rect x="38.5" y="480.5" width="26" height="11" rx="1.5" fill="#EEEEEA" stroke="#DBDBDB" />
              <rect x="117.5" y="480.5" width="26" height="11" rx="1.5" fill="#EEEEEA" stroke="#DBDBDB" />
              <mask id="path-33-inside-4_428_3987" fill="white">
                <path d="M38 499.5C38 499.776 38.2239 500 38.5 500H143.5C143.776 500 144 499.776 144 499.5C144 499.224 143.776 499 143.5 499H38.5C38.2239 499 38 499.224 38 499.5Z" />
              </mask>
              <path d="M38.5 499H143.5V501H38.5V499ZM143.5 500H38.5V498H143.5V500ZM38.5 500C38.7761 500 39 499.776 39 499.5H37C37 498.672 37.6716 498 38.5 498V500ZM143 499.5C143 499.776 143.224 500 143.5 500V498C144.328 498 145 498.672 145 499.5H143ZM143.5 499C143.224 499 143 499.224 143 499.5H145C145 500.328 144.328 501 143.5 501V499ZM38.5 501C37.6716 501 37 500.328 37 499.5H39C39 499.224 38.7761 499 38.5 499V501Z" fill="#1B1A1A" mask="url(#path-33-inside-4_428_3987)" />
              <path d="M41.5 499.5C41.5 498.395 42.3954 497.5 43.5 497.5C44.6046 497.5 45.5 498.395 45.5 499.5C45.5 500.605 44.6046 501.5 43.5 501.5C42.3954 501.5 41.5 500.605 41.5 499.5Z" fill="#DBDBDB" stroke="#D2113A" />
              <path d="M136.5 499.5C136.5 498.395 137.395 497.5 138.5 497.5C139.605 497.5 140.5 498.395 140.5 499.5C140.5 500.605 139.605 501.5 138.5 501.5C137.395 501.5 136.5 500.605 136.5 499.5Z" fill="#DBDBDB" stroke="#D2113A" />
              <path d="M79.5 365C79.5 361.962 81.9624 359.5 85 359.5H112C115.038 359.5 117.5 361.962 117.5 365C117.5 368.038 115.038 370.5 112 370.5H85C81.9624 370.5 79.5 368.038 79.5 365Z" fill="#DBDBDB" stroke="#DBDBDB" />
              <path d="M79.5 419C79.5 415.962 81.9624 413.5 85 413.5H126C129.038 413.5 131.5 415.962 131.5 419C131.5 422.038 129.038 424.5 126 424.5H85C81.9624 424.5 79.5 422.038 79.5 419Z" fill="#DBDBDB" stroke="#DBDBDB" />
              <path d="M79.5 447C79.5 443.962 81.9624 441.5 85 441.5H112C115.038 441.5 117.5 443.962 117.5 447C117.5 450.038 115.038 452.5 112 452.5H85C81.9624 452.5 79.5 450.038 79.5 447Z" fill="#DBDBDB" stroke="#DBDBDB" />
              <path d="M387 469C387 465.686 389.686 463 393 463H462C465.314 463 468 465.686 468 469C468 472.314 465.314 475 462 475H393C389.686 475 387 472.314 387 469Z" fill="#DBDBDB" />
              <rect x="187" y="321" width="193" height="118" rx="7" stroke="#1B1A1A" strokeWidth="2" />
              <rect x="39" y="525" width="104" height="24" rx="12" stroke="#D2113A" strokeWidth="2" />
              <rect x="388" y="321" width="193" height="118" rx="7" stroke="#1B1A1A" strokeWidth="2" />
              <path d="M187 517C187 513.134 190.134 510 194 510H373C376.866 510 380 513.134 380 517V564H187V517Z" stroke="#1B1A1A" strokeWidth="2" />
              <path d="M388 517C388 513.134 391.134 510 395 510H574C577.866 510 581 513.134 581 517V564H388V517Z" stroke="#1B1A1A" strokeWidth="2" />
              <path d="M569.462 102.538L570.987 94.175C571.014 94.0314 571.008 93.8836 570.969 93.7428C570.93 93.602 570.859 93.472 570.763 93.3625C570.67 93.2495 570.554 93.1583 570.422 93.0957C570.29 93.033 570.146 93.0003 570 93H549.838L549.225 89.6375C549.14 89.1784 548.898 88.7634 548.539 88.4644C548.181 88.1653 547.729 88.001 547.262 88H545C544.735 88 544.48 88.1054 544.293 88.2929C544.105 88.4804 544 88.7348 544 89C544 89.2652 544.105 89.5196 544.293 89.7071C544.48 89.8946 544.735 90 545 90H547.262L550.688 108.875C550.199 109.305 549.84 109.863 549.652 110.486C549.463 111.108 549.451 111.771 549.618 112.4C549.785 113.029 550.125 113.599 550.598 114.046C551.071 114.493 551.659 114.799 552.296 114.93C552.934 115.061 553.595 115.011 554.206 114.787C554.817 114.563 555.353 114.173 555.755 113.661C556.157 113.149 556.407 112.535 556.479 111.889C556.551 111.242 556.442 110.588 556.163 110H562.837C562.512 110.685 562.419 111.457 562.571 112.2C562.722 112.943 563.111 113.617 563.679 114.12C564.247 114.623 564.962 114.928 565.718 114.989C566.474 115.05 567.23 114.863 567.871 114.458C568.511 114.053 569.003 113.45 569.272 112.741C569.541 112.032 569.573 111.255 569.362 110.526C569.151 109.798 568.709 109.158 568.102 108.702C567.496 108.246 566.758 108 566 108H552.562L552.012 105H566.513C567.215 105 567.894 104.753 568.434 104.303C568.973 103.853 569.337 103.228 569.462 102.538ZM554.5 111.5C554.5 111.797 554.412 112.087 554.247 112.333C554.082 112.58 553.848 112.772 553.574 112.886C553.3 112.999 552.998 113.029 552.707 112.971C552.416 112.913 552.149 112.77 551.939 112.561C551.73 112.351 551.587 112.084 551.529 111.793C551.471 111.502 551.501 111.2 551.614 110.926C551.728 110.652 551.92 110.418 552.167 110.253C552.413 110.088 552.703 110 553 110C553.398 110 553.779 110.158 554.061 110.439C554.342 110.721 554.5 111.102 554.5 111.5ZM567.5 111.5C567.5 111.797 567.412 112.087 567.247 112.333C567.082 112.58 566.848 112.772 566.574 112.886C566.3 112.999 565.998 113.029 565.707 112.971C565.416 112.913 565.149 112.77 564.939 112.561C564.73 112.351 564.587 112.084 564.529 111.793C564.471 111.502 564.501 111.2 564.614 110.926C564.728 110.652 564.92 110.418 565.167 110.253C565.413 110.088 565.703 110 566 110C566.398 110 566.779 110.158 567.061 110.439C567.342 110.721 567.5 111.102 567.5 111.5ZM550.2 95H568.8L567.5 102.175C567.459 102.407 567.337 102.617 567.157 102.767C566.976 102.918 566.748 103.001 566.513 103H551.65L550.2 95Z" fill="#D2113A" />
              <path d="M361 455C360.717 455 360.479 454.904 360.288 454.712C360.096 454.521 360 454.283 360 454V452H358C357.717 452 357.479 451.904 357.288 451.713C357.096 451.521 357 451.283 357 451C357 450.717 357.096 450.479 357.288 450.287C357.479 450.096 357.717 450 358 450H360V448C360 447.717 360.096 447.479 360.288 447.287C360.479 447.096 360.717 447 361 447C361.283 447 361.521 447.096 361.713 447.287C361.904 447.479 362 447.717 362 448V450H364C364.283 450 364.521 450.096 364.713 450.287C364.904 450.479 365 450.717 365 451C365 451.283 364.904 451.521 364.713 451.713C364.521 451.904 364.283 452 364 452H362V454C362 454.283 361.904 454.521 361.713 454.712C361.521 454.904 361.283 455 361 455ZM356 468C355.45 468 354.979 467.804 354.588 467.413C354.196 467.021 354 466.55 354 466C354 465.45 354.196 464.979 354.588 464.587C354.979 464.196 355.45 464 356 464C356.55 464 357.021 464.196 357.412 464.587C357.804 464.979 358 465.45 358 466C358 466.55 357.804 467.021 357.412 467.413C357.021 467.804 356.55 468 356 468ZM366 468C365.45 468 364.979 467.804 364.588 467.413C364.196 467.021 364 466.55 364 466C364 465.45 364.196 464.979 364.588 464.587C364.979 464.196 365.45 464 366 464C366.55 464 367.021 464.196 367.413 464.587C367.804 464.979 368 465.45 368 466C368 466.55 367.804 467.021 367.413 467.413C367.021 467.804 366.55 468 366 468ZM356 463C355.233 463 354.654 462.671 354.263 462.012C353.871 461.354 353.867 460.7 354.25 460.05L355.6 457.6L352 450H351C350.717 450 350.479 449.904 350.288 449.712C350.096 449.521 350 449.283 350 449C350 448.717 350.096 448.479 350.288 448.287C350.479 448.096 350.717 448 351 448H352.625C352.808 448 352.983 448.05 353.15 448.15C353.317 448.25 353.442 448.392 353.525 448.575L357.55 457H364.55L368.125 450.525C368.208 450.358 368.329 450.229 368.488 450.137C368.646 450.046 368.817 450 369 450C369.383 450 369.671 450.167 369.863 450.5C370.054 450.833 370.058 451.167 369.875 451.5L366.3 457.95C366.117 458.283 365.875 458.542 365.575 458.725C365.275 458.908 364.933 459 364.55 459H357.1L356 461H367C367.283 461 367.521 461.096 367.712 461.287C367.904 461.479 368 461.717 368 462C368 462.283 367.904 462.521 367.712 462.712C367.521 462.904 367.283 463 367 463H356Z" fill="#D2113A" />
              <path d="M561 455C560.717 455 560.479 454.904 560.288 454.712C560.096 454.521 560 454.283 560 454V452H558C557.717 452 557.479 451.904 557.288 451.713C557.096 451.521 557 451.283 557 451C557 450.717 557.096 450.479 557.288 450.287C557.479 450.096 557.717 450 558 450H560V448C560 447.717 560.096 447.479 560.288 447.287C560.479 447.096 560.717 447 561 447C561.283 447 561.521 447.096 561.713 447.287C561.904 447.479 562 447.717 562 448V450H564C564.283 450 564.521 450.096 564.713 450.287C564.904 450.479 565 450.717 565 451C565 451.283 564.904 451.521 564.713 451.713C564.521 451.904 564.283 452 564 452H562V454C562 454.283 561.904 454.521 561.713 454.712C561.521 454.904 561.283 455 561 455ZM556 468C555.45 468 554.979 467.804 554.588 467.413C554.196 467.021 554 466.55 554 466C554 465.45 554.196 464.979 554.588 464.587C554.979 464.196 555.45 464 556 464C556.55 464 557.021 464.196 557.412 464.587C557.804 464.979 558 465.45 558 466C558 466.55 557.804 467.021 557.412 467.413C557.021 467.804 556.55 468 556 468ZM566 468C565.45 468 564.979 467.804 564.588 467.413C564.196 467.021 564 466.55 564 466C564 465.45 564.196 464.979 564.588 464.587C564.979 464.196 565.45 464 566 464C566.55 464 567.021 464.196 567.413 464.587C567.804 464.979 568 465.45 568 466C568 466.55 567.804 467.021 567.413 467.413C567.021 467.804 566.55 468 566 468ZM556 463C555.233 463 554.654 462.671 554.263 462.012C553.871 461.354 553.867 460.7 554.25 460.05L555.6 457.6L552 450H551C550.717 450 550.479 449.904 550.288 449.712C550.096 449.521 550 449.283 550 449C550 448.717 550.096 448.479 550.288 448.287C550.479 448.096 550.717 448 551 448H552.625C552.808 448 552.983 448.05 553.15 448.15C553.317 448.25 553.442 448.392 553.525 448.575L557.55 457H564.55L568.125 450.525C568.208 450.358 568.329 450.229 568.488 450.137C568.646 450.046 568.817 450 569 450C569.383 450 569.671 450.167 569.863 450.5C570.054 450.833 570.058 451.167 569.875 451.5L566.3 457.95C566.117 458.283 565.875 458.542 565.575 458.725C565.275 458.908 564.933 459 564.55 459H557.1L556 461H567C567.283 461 567.521 461.096 567.712 461.287C567.904 461.479 568 461.717 568 462C568 462.283 567.904 462.521 567.712 462.712C567.521 462.904 567.283 463 567 463H556Z" fill="#D2113A" />
              <circle cx="571.5" cy="92.5" r="4" fill="#D2113A" stroke="#EEEEEA" strokeWidth="3" />
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
    </section>
  )
}
