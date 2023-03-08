import React,{useEffect, useState} from 'react';
import { ButtonCont, CryptoCircle, MainContainer, MainLeftCont, MainRightCont,StyledButton, TradesContentContainer, TradesDiv } from './styles';
import EthereumLogo from '../../assets/EthereumLogo';
import XRPLogo from '../../assets/XRPLogo';
import AmpLogo from '../../assets/AmpLogo';
import TronLogo from '../../assets/TronLogo';
import CryptoTable from './crypto-chart/CryptoTable';
import WhyUsSection from './why-us-section/WhyUsSection';
import Stats from './stats-section/Stats';
import { Logo, NavBar, NavLink, NavLinkContainer } from '../../styles/nav';
const MainSection = () => {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollPos(window.scrollY);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const circleRadius = 100; // Adjust this value to change the radius of the circle
    const circleCenterX = -100;
    const circleCenterY = 0;
    const circleAngle = scrollPos / 100; // Adjust this value to change the speed of the rotation
    const circleX = -(circleCenterX + circleRadius * Math.cos(circleAngle));
    const circleY = -(circleCenterY + circleRadius * Math.sin(circleAngle));
    return (
        <>
        <NavBar>
          <Logo>Adze.<sub>Design</sub></Logo>
          <NavLinkContainer>
            <li><NavLink href="">Solutions</NavLink></li>
            <li><NavLink href="">Tools</NavLink></li>
            <li><NavLink href="">About</NavLink></li>
            <li><NavLink href="">Insights</NavLink></li>
          </NavLinkContainer>
        </NavBar>
        <MainContainer>
            <MainLeftCont>
                <h1>BLOCKCHAIN</h1>
                <h2>GAME<span>O</span>TRACKER</h2>
                <h3>BLOCKCHAIN & E-GAMING SERVICES</h3>
                <ButtonCont>
                    <StyledButton url="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg"><div><span className='download'>Download on the</span> <br/> <span className='store'>App Store</span></div></StyledButton>
                    <StyledButton url="https://www.svgrepo.com/show/117151/android-logo.svg" invert={true}><div><span className='download'>Download on the</span> <br/> <span className='store'>App Store</span></div></StyledButton>
                </ButtonCont>
            </MainLeftCont>
            <MainRightCont>
                <CryptoCircle style={{ transform: `translate(${-(circleCenterX + circleRadius * Math.cos(scrollPos / 100))}px, ${-(circleCenterY + circleRadius * Math.sin(scrollPos / 100))}px) rotate(${scrollPos / 100}deg)` }} width="150px" height="150px" background="linear-gradient(-50deg, #b424b6 0%,#111111 80%);" afterBorder={'1px solid #716565'} svgPadding="5px" svgBackground="linear-gradient(130deg, #8e2290 0%, #5c425b 100%);" afterWidth="100px" afterHeight="100px" afterTranslateY="-25%" >
                    <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(-25)" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 7V12V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 12H14.5C15.8807 12 17 13.1193 17 14.5V14.5C17 15.8807 15.8807 17 14.5 17H7V12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 7H14.5C15.8807 7 17 8.11929 17 9.5V9.5C17 10.8807 15.8807 12 14.5 12H7V7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 7L9 5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 19L9 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 7L13 5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 19L13 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>              
                </CryptoCircle>
                <CryptoCircle style={{ transform: `translate(${-(circleCenterX + circleRadius * Math.cos(scrollPos / 200))}px, ${-(circleCenterY + circleRadius * Math.sin(scrollPos / 200))}px) rotate(${scrollPos / 200}deg)` }} width="80px;" height="80px;" background="#2b1730" svgBackground="white" left="50px" bottom="100px">
                    <svg fill="#000000" width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="white">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.275-25.94c-.39.152-.49.707-.186.988.287.293.847.19.995-.193.255-.471-.33-1.042-.81-.796zm-5.155.546c-.405.106-.45.734-.057.884.297.16.718-.089.687-.427.03-.313-.339-.575-.63-.457zm10.558.893c.31.078.54-.17.612-.44-.05-.317-.362-.622-.701-.46-.438.142-.366.846.089.9zm-9.385 1.265c-.456.23-.519.914-.105 1.212.428.38 1.186.054 1.211-.507.075-.557-.62-1.008-1.106-.705zm7.43.322c-.271.536.276 1.15.853 1.044.435-.142.736-.659.491-1.076-.247-.536-1.127-.519-1.344.032zm-4.069 1.013c-.026.386.255.702.588.863.218.013.455.054.655-.056.438-.19.654-.762.411-1.178-.13-.3-.46-.428-.763-.488-.458.033-.896.385-.891.859zm-7.666.69c-.388.175-.442.766-.1 1.012.322.262.884.095.976-.316.169-.475-.431-.966-.876-.697zm16.462-.002c-.388.234-.345.858.067 1.04.374.22.913-.102.887-.529.045-.468-.577-.799-.954-.51zm-6.64.851c-.776.232-1.236 1.158-.92 1.898.278.827 1.377 1.211 2.13.758.725-.383.974-1.4.506-2.067-.354-.546-1.094-.81-1.716-.589zm-3.653.073c-.735.323-1.073 1.276-.692 1.978.34.725 1.33 1.023 2.032.63.701-.349 1.004-1.29.612-1.966-.333-.694-1.262-.963-1.952-.642zM9.95 12.94c-.101.514.365 1.036.898.99.484.003.837-.436.867-.885a.978.978 0 00-.87-.857c-.423.03-.842.315-.895.752zm10.802-.656c-.587.272-.63 1.172-.065 1.492.544.384 1.384-.077 1.347-.732.024-.618-.735-1.073-1.282-.76zm-8.63 2.307c-.868.206-1.376 1.256-.958 2.039.365.854 1.626 1.106 2.31.48.534-.427.674-1.236.331-1.818-.314-.578-1.045-.874-1.684-.701zm6.927-.003c-.874.235-1.336 1.325-.877 2.096.38.746 1.447.996 2.136.52.657-.411.868-1.362.426-1.999-.334-.557-1.064-.792-1.685-.617zm-11.04.726c-.53.148-.687.904-.262 1.243.363.362 1.066.18 1.203-.31.223-.539-.389-1.138-.941-.933zm14.969.782c.092.21.203.43.42.538.464.251 1.119-.112 1.084-.647.03-.406-.338-.706-.716-.765a.836.836 0 00-.788.874zM5.294 15.58c-.275.123-.394.49-.194.729.226.343.843.185.86-.226.077-.363-.334-.646-.666-.503zm20.949-.009c-.39.205-.237.912.235.87.336.05.624-.353.467-.647-.093-.269-.468-.386-.702-.223zm-12.317 1.973c-.654.14-1.158.751-1.156 1.409-.023.687.52 1.343 1.212 1.453.895.206 1.82-.587 1.763-1.482-.005-.886-.945-1.603-1.82-1.38zm3.462-.001c-.526.128-.972.555-1.088 1.08-.23.787.378 1.678 1.203 1.783.876.174 1.773-.593 1.726-1.471.014-.906-.954-1.636-1.84-1.392zm-6.676.545c-.663.066-1.013.943-.545 1.422.4.5 1.304.334 1.486-.278.249-.573-.327-1.247-.94-1.144zm10.154.027c-.661.207-.772 1.2-.165 1.536.535.376 1.365-.068 1.343-.711.042-.585-.63-1.05-1.178-.825zm2.838 2.8c.145.398.75.493 1.017.16.197-.179.148-.457.119-.69-.141-.144-.296-.315-.517-.311-.444-.073-.833.448-.619.841zm-16.268-.732c-.395.198-.409.817-.027 1.034.356.24.896-.001.945-.423.094-.477-.503-.882-.918-.61zm8.193.883c-.654.207-.752 1.193-.163 1.528.531.39 1.387-.06 1.346-.71.052-.588-.64-1.053-1.183-.818zm-3.794.871c-.326.12-.459.474-.465.791.112.291.338.598.685.605.42.062.834-.294.82-.712.042-.51-.578-.923-1.04-.684zm7.686.008c-.464.233-.516.937-.088 1.23.443.374 1.207.01 1.195-.56.045-.544-.631-.96-1.107-.67zm1.337 3.25c.217.366.85.236.891-.19.058-.316-.234-.52-.51-.575-.344.072-.593.451-.381.766zm-10.611-.273c.03.359.428.67.77.443.381-.2.252-.845-.183-.875-.299-.065-.503.183-.587.432zm5.12.287c-.153.373.213.824.618.777.218.005.387-.148.518-.3.025-.103.051-.207.08-.31-.054-.198-.116-.43-.328-.52-.32-.196-.805-.016-.889.353z"></path>
                        </g>
                    </svg>                
                </CryptoCircle>
                <CryptoCircle style={{ transform: `translate(${-(circleCenterX + circleRadius * Math.cos(scrollPos / 300))}px, ${-(circleCenterY + circleRadius * Math.sin(scrollPos / 300))}px) rotate(${scrollPos / 300}deg)` }}  width="150px" height="150px" zIndex="200" top="100px" background="linear-gradient(-50deg, #b424b6 0%,#111111 80%);"  svgPadding="5px" svgBackground="linear-gradient(130deg, #8e2290 0%, #5c425b 100%);" afterWidth="175px" afterHeight="175px" afterTranslateY="7%" afterBoxShadow="0 0 0 15px #50215024" afterBackground="#50215024" afterBorder={'1px solid #662576'}>
                    <EthereumLogo/>
                </CryptoCircle>


                <CryptoCircle style={{ transform: `translate(${-(circleCenterX + circleRadius * Math.cos(scrollPos / 50))}px, ${-(circleCenterY + circleRadius * Math.sin(scrollPos / 50))}px) rotate(${scrollPos / 50}deg)` }} width="40px" height="40px" right="60px" background="linear-gradient(-50deg, #e628cb 0%,#801baf 80%);"  beforeBoxShadow="-10px -5px 5px 0px #66339933, -10px 10px 10px #ca15ebb3;">
                    <XRPLogo/>
                </CryptoCircle>
                <div  style={{position:'relative', top:'200px', left:'50px'}}>
                <CryptoCircle style={{ transform: `translate(${-(circleCenterX + circleRadius * Math.cos(scrollPos / 100))}px, ${-(circleCenterY + circleRadius * Math.sin(scrollPos / 100))}px) rotate(${scrollPos / 100}deg)` }} width="64px" height="50px"  beforeBg="white" afterBackground="linear-gradient(-50deg, #a423bc 0%,#9a22d6 80%);" afterTranslateY="25%" afterWidth="100px" afterHeight="100px" afterZIndex="1" beforeZIndex="2" >
                    <AmpLogo/>
                </CryptoCircle>
                <CryptoCircle style={{ transform: `translate(${-(circleCenterX + circleRadius * Math.cos(scrollPos / 100))}px, ${-(circleCenterY + circleRadius * Math.sin(scrollPos / 100))}px) rotate(${scrollPos / 100}deg)` }} width="40px" height="40px"  background="#1111118c" zIndex="-2"afterBackground="linear-gradient(-50deg,#a423bc26 0%,#9a22d629 80%);" afterWidth="75px" afterHeight="75px" afterZIndex="-1" afterTranslateY="20%" left="64px" bottom="72px" beforeBg="black" beforeWidth="100%" beforeZIndex="-1">

                </CryptoCircle>
                </div>
                <CryptoCircle style={{ transform: `translate(${-(circleCenterX + circleRadius * Math.cos(scrollPos / 100))}px, ${-(circleCenterY + circleRadius * Math.sin(scrollPos / 100))}px) rotate(${scrollPos / 100}deg)` }} width="80px" height="80px"  bottom="150px" right="50px" background="linear-gradient(20deg, #b424b6 0%,#111111 80%);" border="15px solid #111111" afterWidth="135px" afterHeight="135px" afterTranslateY="20%" afterBackground="linear-gradient(-135deg,#111111 0%,#111111 10%,#5a1447 80%);" afterZIndex="-1">
                    <TronLogo/>
                </CryptoCircle>
                
            </MainRightCont>
            
        </MainContainer>

        <TradesContentContainer>
            <TradesDiv>
                <h2>All-time trade volume</h2>
                <h4>$4,683,048,9441</h4>
            </TradesDiv>
            <TradesDiv>
                <h2>Total Trades</h2>
                <h4>$4,683,048,9441</h4>
            </TradesDiv>
        </TradesContentContainer>
        <div style={{height:'1600px'}}>
            <CryptoTable></CryptoTable>
            <WhyUsSection></WhyUsSection>
            <Stats/>
        </div>
        </>
    );
};

export default MainSection;