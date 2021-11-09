

import * as React from 'react'
import whiteLogo from '../../assets/logo-white.svg'
import { Link } from 'gatsby';
import { Container, Row, Col, Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (

    <div>
        <footer>
            
            <div className="top">
                <Container>
                    <Row className="justify-content-center">

                        <Col md="auto">
                            <div className="info">
                                <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
                                    <title>demo_ico</title>
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.5">
                                        <g id="Contact" transform="translate(-249.000000, -2608.000000)" fill="#FFFFFF" fillRule="nonzero">
                                            <g id="Group-8" transform="translate(0.000000, 2567.000000)">
                                                <path d="M265,41 C273.872727,41 281,48.1272727 281,57 C281,65.8727273 273.872727,73 265,73 C256.127273,73 249,65.8727273 249,57 C249,48.1272727 256.127273,41 265,41 Z M269,63 C267.857143,63.7291667 266.428571,64.1666667 265,64.1666667 C263.571429,64.1666667 262.142857,63.7291667 261,63 L257,67.0833333 C259.142857,68.8333333 262,70 265,70 C268,70 270.857143,68.9791667 273,67.0833333 L269,63 Z M254.857143,49 C253,51.1428571 252,54 252,57 C252,60 253,62.8571429 254.857143,65 L259,60.8571429 C258.142857,59.8571429 257.714286,58.4285714 257.714286,57 C257.714286,55.5714286 258.142857,54.1428571 258.857143,53 L254.857143,49 Z M275.142857,49 L271,52.8571429 C271.714286,54 272.142857,55.4285714 272.142857,56.8571429 C272.142857,58.2857143 271.714286,59.7142857 271,60.8571429 L275.142857,65 C276.857143,62.8571429 278,60 278,57 C278,54 277,51.1428571 275.142857,49 Z M265,53 C262.733333,53 261,54.7333333 261,57 C261,59.2666667 262.733333,61 265,61 C267.266667,61 269,59.2666667 269,57 C269,54.7333333 267.266667,53 265,53 Z M265,44 C262,44 259.142857,45.0208333 257,46.9166667 L261,51 C262.142857,50.2708333 263.571429,49.8333333 265,49.8333333 C266.428571,49.8333333 267.857143,50.2708333 269,51 L273,46.9166667 C270.857143,45.1666667 268,44 265,44 Z" id="demo_ico"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <span><b>On-demand demo</b> & <b>24-hour support</b></span>
                            </div>
                        </Col>

                        <Col md="auto">
                            <div className="info">
                                <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" >
                                    <title>uptime</title>
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.5">
                                        <g id="Contact" transform="translate(-601.000000, -2608.000000)" fill="#FFFFFF" fillRule="nonzero">
                                            <g id="Group-8" transform="translate(0.000000, 2567.000000)">
                                                <path d="M617,41 C625.836556,41 633,48.163444 633,57 C633,65.836556 625.836556,73 617,73 C608.163444,73 601,65.836556 601,57 C601,48.163444 608.163444,41 617,41 Z M617,44.2 C609.930755,44.2 604.2,49.9307552 604.2,57 C604.2,64.0692448 609.930755,69.8 617,69.8 C624.069245,69.8 629.8,64.0692448 629.8,57 C629.8,53.6052289 628.451432,50.3494988 626.050967,47.9490332 C623.650501,45.5485676 620.394771,44.2 617,44.2 Z M623.54294,51.4618729 C624.152353,52.0777035 624.152353,53.0761621 623.54294,53.6919926 L615.772227,61.5445267 C615.478932,61.8385044 615.081882,62.0023872 614.668786,62 C614.255691,62.0023872 613.858641,61.8385044 613.565345,61.5445267 L610.45706,58.4035131 C609.847647,57.7876825 609.847647,56.7892239 610.45706,56.1733934 C611.066474,55.5575628 612.054529,55.5575628 612.663943,56.1733934 L614.668786,58.2150523 L621.336057,51.4618729 C621.945471,50.8460424 622.933526,50.8460424 623.54294,51.4618729 Z" id="uptime"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <span><b>99.99% uptime</b> the last 12 months</span>
                            </div>
                        </Col>

                        <Col md="auto">
                            <div className="info">
                                <svg width="28px" height="32px" viewBox="0 0 28 32" version="1.1">
                                    <title>security</title>
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.5">
                                        <g id="Contact" transform="translate(-923.000000, -2608.000000)" fill="#FFFFFF" fillRule="nonzero">
                                            <g id="Group-8" transform="translate(0.000000, 2567.000000)">
                                                <path d="M936.5884,41.060305 C936.8565,40.9798983 937.1435,40.9798983 937.4116,41.060305 L937.4116,41.060305 L950.0116,44.8022562 C950.5989,44.9765832 951,45.5002402 951,46.0934928 L951,46.0934928 L951,62.372129 C951,68.9283139 938.7808,72.554047 937.3878,72.9459451 C937.2597,72.9824322 937.1274,73 936.9958,73 C936.8642,73 936.7319,72.9824322 936.6038,72.9459451 C935.2115,72.554047 923,68.9269625 923,62.372129 L923,62.372129 L923,46.0934928 C923,45.5002402 923.4011,44.9765832 923.9884,44.8022562 L923.9884,44.8022562 Z M937,43.7657533 L925.8,47.0921573 L925.8,62.372129 C925.8,65.3654196 931.4959,68.6154711 936.9965,70.2391455 C942.4999,68.6161468 948.2,65.3660953 948.2,62.372129 L948.2,62.372129 L948.2,47.0921573 L937,43.7657533 Z M937,51.561147 C939.3163,51.561147 941.2,53.379419 941.2,55.6152652 C941.2,57.3761039 940.0289,58.8741006 938.4,59.4328933 L938.4,59.4328933 L938.4,61.0207562 C938.4,61.766714 937.7728,62.372129 937,62.372129 C936.2272,62.372129 935.6,61.766714 935.6,61.0207562 L935.6,61.0207562 L935.6,59.4328933 C933.9711,58.8741006 932.8,57.3761039 932.8,55.6152652 C932.8,53.379419 934.6837,51.561147 937,51.561147 Z M937,54.2638925 C936.2279,54.2638925 935.6,54.8699832 935.6,55.6152652 C935.6,56.3605473 936.2279,56.966638 937,56.966638 C937.7721,56.966638 938.4,56.3605473 938.4,55.6152652 C938.4,54.8699832 937.7721,54.2638925 937,54.2638925 Z" id="security"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <span>Serious about <b>security & privacy</b> </span>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
                
            <div className="page-links">
                <Container>
                    <Row>

                        <Col md="4" xs="6">
                            <h5>WORKHALL</h5>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Link to="/home" className="nav-link">About us</Link>
                                <Link to="link-1" className="nav-link">Careers</Link>
                                <Link to="/contact_page/contact" className="nav-link">Contact us</Link>
                                <Link to="link-2" className="nav-link">Demo</Link>
                                <Link to="link-2" className="nav-link">Free Webinar</Link>
                                <Link to="link-2" className="nav-link">Roadmap</Link>
                                <Link to="link-2" className="nav-link">Help Docs</Link>
                            </Nav>
                        </Col>

                        <Col md="4" xs="6">
                            <h5>FEATURES</h5>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Link to="link-1" className="nav-link">Procedure Creation</Link>
                                <Link to="link-2" className="nav-link">Checklists</Link>
                                <Link to="link-2" className="nav-link">To Do Lists</Link>
                                <Link to="link-2" className="nav-link">Collaboration</Link>
                                <Link to="link-2" className="nav-link">Task Tray</Link>
                                <Link to="link-2" className="nav-link">Custom Branding</Link>
                                <Link to="link-2" className="nav-link">Reporting</Link>
                            </Nav>
                        </Col>

                        <Col md="4" xs="12" className="blog">
                            <h5>BLOG</h5>
                            <Link to="link-1" className="nav-link">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a velit ac turpis congue vulputate in eget odio. Maecenas tincidunt eros id nibh lobortis luctus.</Link>
                        </Col>
                            
                    </Row>
                </Container>
            </div>

            <div className="bottom">
                <Container>
                    <Row className="align-items-center">

                        <Col sm="4" className="logo">
                            <img style={{width: "200px"}} src={whiteLogo} alt="WorkHall Logo" />
                        </Col>

                        <Col sm="8">
                            <Nav className="social-icons" defaultActiveKey="/home" as="ul">
                                <Nav.Item as="li">
                                    <Link to="/home" className="nav-link">
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <title>Youtube</title>
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Contact" transform="translate(-1070.000000, -3128.000000)" fill="#B0B2B8" fillRule="nonzero" className="icon">
                                                    <g id="Group-8" transform="translate(0.000000, 2567.000000)">
                                                        <g id="Group-10" transform="translate(982.000000, 561.000000)">
                                                            <g id="socials" transform="translate(88.000000, 0.000000)">
                                                                <path d="M19.5,0 C21.9858462,0 24,2.01415385 24,4.5 L24,4.5 L24,19.5 C24,21.9858462 21.9858462,24 19.5,24 L19.5,24 L4.5,24 C2.01415385,24 0,21.9858462 0,19.5 L0,19.5 L0,4.5 C0,2.01415385 2.01415385,0 4.5,0 L4.5,0 Z M12.2807837,6.00097493 L11.7192163,6.00097493 C10.647151,6.00682449 6.81851429,6.04777143 5.7488,6.3344 C5.0608,6.5184 4.5184,7.0608 4.3344,7.7488 C4.04612414,8.82466207 4.00636195,11.5021888 4.00087751,12.2203486 L4.00087751,12.5796514 C4.00636195,13.2978112 4.04612414,15.9753379 4.3344,17.0512 C4.5184,17.7392 5.0608,18.2816 5.7488,18.4656 C6.81851429,18.7522286 10.647151,18.7931755 11.7192163,18.7990251 L11.9879515,18.7999922 C11.9959158,18.8 12,18.8 12,18.8 L12.0120485,18.7999922 L12.0120485,18.7999922 L12.2807837,18.7990251 C13.352849,18.7931755 17.1814857,18.7522286 18.2512,18.4656 C18.94,18.2816 19.4816,17.7392 19.6656,17.0512 C19.9538759,15.9753379 19.993638,13.2978112 19.9991225,12.5796514 L19.9999863,12.4119119 C20,12.4040466 20,12.4 20,12.4 L19.9999863,12.3880881 L19.9999863,12.3880881 L19.9991225,12.2203486 C19.993638,11.5021888 19.9538759,8.82466207 19.6656,7.7488 C19.4816,7.0608 18.9392,6.5184 18.2512,6.3344 C17.1814857,6.04777143 13.352849,6.00682449 12.2807837,6.00097493 Z M11,9.9752 L14.6,12.0536 C14.8664,12.2072 14.8664,12.5928 14.6,12.7464 L11,14.8248 C10.7336,14.9792 10.4,14.7864 10.4,14.4784 L10.4,10.3216 C10.4,10.0136 10.7336,9.8216 11,9.9752 Z" id="Youtube"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="link-1" className="nav-link">
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <title>twitter</title>
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Contact" transform="translate(-1119.000000, -3128.000000)" fill="#B0B2B8" className="icon">
                                                    <g id="Group-8" transform="translate(0.000000, 2567.000000)">
                                                        <g id="Group-10" transform="translate(982.000000, 561.000000)">
                                                            <g id="socials" transform="translate(88.000000, 0.000000)">
                                                                <path d="M68.5,0 C70.9858462,0 73,2.01415385 73,4.5 L73,4.5 L73,19.5 C73,21.9858462 70.9858462,24 68.5,24 L68.5,24 L53.5,24 C51.0141538,24 49,21.9858462 49,19.5 L49,19.5 L49,4.5 C49,2.01415385 51.0141538,0 53.5,0 L53.5,0 Z M64.0771124,6 C62.2642591,6 60.7947771,7.46987553 60.7947771,9.28184012 C60.7947771,9.5390222 60.8243144,9.79005159 60.8796969,10.0293909 C58.1518019,9.89280136 55.7334333,8.58597189 54.1138033,6.59988641 C53.831968,7.08471769 53.6701281,7.64830328 53.6701281,8.25065076 C53.6701281,9.38889678 54.2491827,10.3936296 55.1297642,10.9818259 C54.5919388,10.9645984 54.0854967,10.8169341 53.6430522,10.5714421 L53.6430522,10.6126651 L53.6430522,10.6126651 C53.6430522,12.2031331 54.7740856,13.5296512 56.2761817,13.8305173 C56.0011153,13.90558 55.710665,13.9455724 55.4109842,13.9455724 C55.1999154,13.9455724 54.9937695,13.9246533 54.7937772,13.887122 C55.2116072,15.1908751 56.4238683,16.1402338 57.8601208,16.1666903 C56.737087,17.047139 55.3217569,17.5719627 53.7833545,17.5719627 C53.5187493,17.5719627 53.2572209,17.556581 53,17.5258176 C54.4528672,18.4567183 56.1777239,19 58.0318065,19 C64.0697281,19 67.3705242,13.9991008 67.3705242,9.66207582 C67.3705242,9.51994889 67.3674474,9.37843722 67.3612938,9.23754082 C68.0031153,8.77424393 68.5600169,8.19650717 69,7.53878556 C68.4110996,7.8002745 67.7785085,7.97624119 67.1145341,8.05561077 C67.7926618,7.64953382 68.3126418,7.00657864 68.5575555,6.23995456 C67.9237337,6.61588338 67.2209915,6.88906243 66.4727126,7.03672677 C65.8739664,6.39869374 65.0210761,6 64.0771124,6 Z" id="twitter"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="link-2" className="nav-link">
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <title>FB</title>
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Contact" transform="translate(-1168.000000, -3128.000000)" fill="#B0B2B8" fillRule="nonzero" className="icon">
                                                    <g id="Group-8" transform="translate(0.000000, 2567.000000)">
                                                        <g id="Group-10" transform="translate(982.000000, 561.000000)">
                                                            <g id="socials" transform="translate(88.000000, 0.000000)">
                                                                <path d="M117.5,0 L102.5,0 C100.014154,0 98,2.01415385 98,4.5 L98,19.5 C98,21.9858462 100.014154,24 102.5,24 L117.5,24 C119.985846,24 122,21.9858462 122,19.5 L122,4.5 C122,2.01415385 119.985846,0 117.5,0 Z M116.889846,12.9249231 L114.644,12.9249231 L114.644,21.2363077 L110.893538,21.2363077 L110.893538,12.9249231 L109.438769,12.9249231 L109.438769,10.1252308 L110.893538,10.1252308 L110.893538,8.34184615 C110.894462,6.00369231 111.865538,4.61538462 114.620923,4.61538462 L117.413231,4.61538462 L117.413231,7.40492308 L115.791385,7.40492308 C114.718769,7.40492308 114.648615,7.80461538 114.648615,8.55230769 L114.644,10.1243077 L117.195385,10.1243077 L116.889846,12.9249231 Z" id="FB"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="link-2" className="nav-link">
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <title>In</title>
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Contact" transform="translate(-1217.000000, -3128.000000)" fill="#B0B2B8" fillRule="nonzero" className="icon">
                                                    <g id="Group-8" transform="translate(0.000000, 2567.000000)">
                                                        <g id="Group-10" transform="translate(982.000000, 561.000000)">
                                                            <g id="socials" transform="translate(88.000000, 0.000000)">
                                                                <path d="M167.484375,0 L150.515625,0 C148.577271,0 147,1.57727053 147,3.515625 L147,20.484375 C147,22.4227295 148.577271,24 150.515625,24 L167.484375,24 C169.422729,24 171,22.4227295 171,20.484375 L171,3.515625 C171,1.57727053 169.422729,0 167.484375,0 Z M155.484375,19.03125 L152.671875,19.03125 L152.671875,9.1875 L155.484375,9.1875 L155.484375,19.03125 Z M155.484375,7.78125 L152.671875,7.78125 L152.671875,4.96875 L155.484375,4.96875 L155.484375,7.78125 Z M165.328125,19.03125 L162.515625,19.03125 L162.515625,13.40625 C162.515625,12.6309815 161.884644,12 161.109375,12 C160.334106,12 159.703125,12.6309815 159.703125,13.40625 L159.703125,19.03125 L156.890625,19.03125 L156.890625,9.1875 L159.703125,9.1875 L159.703125,9.71759034 C160.439941,9.48852539 160.918579,9.1875 161.8125,9.1875 C163.71991,9.18951417 165.328125,10.9006348 165.328125,12.9228516 L165.328125,19.03125 Z" id="In"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="link-2" className="nav-link">
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <title>Insta</title>
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Contact" transform="translate(-1266.000000, -3128.000000)" fill="#B0B2B8" fillRule="nonzero" className="icon">
                                                    <g id="Group-8" transform="translate(0.000000, 2567.000000)">
                                                        <g id="Group-10" transform="translate(982.000000, 561.000000)">
                                                            <g id="socials" transform="translate(88.000000, 0.000000)">
                                                                <path d="M208,7.125 C205.285937,7.125 203.078125,9.3328125 203.078125,12.046875 C203.078125,14.7609375 205.285937,16.96875 208,16.96875 C210.714062,16.96875 212.921875,14.7609375 212.921875,12.046875 C212.921875,9.3328125 210.714062,7.125 208,7.125 Z M208,7.125 C205.285937,7.125 203.078125,9.3328125 203.078125,12.046875 C203.078125,14.7609375 205.285937,16.96875 208,16.96875 C210.714062,16.96875 212.921875,14.7609375 212.921875,12.046875 C212.921875,9.3328125 210.714062,7.125 208,7.125 Z M216.484375,0 L199.515625,0 C197.575,0 196,1.575 196,3.515625 L196,20.484375 C196,22.425 197.575,24 199.515625,24 L216.484375,24 C218.425,24 220,22.425 220,20.484375 L220,3.515625 C220,1.575 218.425,0 216.484375,0 Z M208,18.375 C204.512547,18.375 201.671875,15.5343281 201.671875,12.046875 C201.671875,8.55932813 204.512547,5.71875 208,5.71875 C211.487453,5.71875 214.328125,8.55932813 214.328125,12.046875 C214.328125,15.5343281 211.487453,18.375 208,18.375 Z M215.734375,5.71875 C214.960938,5.71875 214.328125,5.0859375 214.328125,4.3125 C214.328125,3.5390625 214.960938,2.90625 215.734375,2.90625 C216.507812,2.90625 217.140625,3.5390625 217.140625,4.3125 C217.140625,5.0859375 216.507812,5.71875 215.734375,5.71875 Z M208,7.125 C205.285937,7.125 203.078125,9.3328125 203.078125,12.046875 C203.078125,14.7609375 205.285937,16.96875 208,16.96875 C210.714062,16.96875 212.921875,14.7609375 212.921875,12.046875 C212.921875,9.3328125 210.714062,7.125 208,7.125 Z M208,7.125 C205.285937,7.125 203.078125,9.3328125 203.078125,12.046875 C203.078125,14.7609375 205.285937,16.96875 208,16.96875 C210.714062,16.96875 212.921875,14.7609375 212.921875,12.046875 C212.921875,9.3328125 210.714062,7.125 208,7.125 Z M208,7.125 C205.285937,7.125 203.078125,9.3328125 203.078125,12.046875 C203.078125,14.7609375 205.285937,16.96875 208,16.96875 C210.714062,16.96875 212.921875,14.7609375 212.921875,12.046875 C212.921875,9.3328125 210.714062,7.125 208,7.125 Z" id="Insta"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                        <Col sm="12">
                            <Nav className="secure-link" defaultActiveKey="/home" as="ul">
                                <Nav.Item as="li">
                                    <Link to="/" className="nav-link" >© 2021 WorkHall</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="link-1" className="nav-link">Security</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="link-2" className="nav-link">Your Privacy</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="link-2" className="nav-link" style={{borderRight: "none", paddingRight: "0"}}>Terms</Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                    </Row>
                </Container>
            </div>

        </footer>
    </div>

)

export default Footer
