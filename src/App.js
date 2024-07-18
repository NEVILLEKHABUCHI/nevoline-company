import React, {useState,useEffect} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCogs,faCode,faFileAlt,faPalette} from '@fortawesome/free-solid-svg-icons';
// import { faChevronDown,faChevronUp} from '@fortawesome/free-solid-svg-icons';

export default function App(){
  return <AppContainer/>
}
function AppContainer() {
    const [theme,setTheme]=useState('dark');
    const [currentPage,setCurrrentPage]=useState('Home');

    useEffect(()=>{
      document.body.className=theme;
    },[theme]);

    const handleThemeChange=(event)=>{
      setTheme(event.target.value);
    }

    const handlePageChange=(page)=>{
      setCurrrentPage(page);
    }

  return(
    <div className='appContainer'>
      <ContainerLeft theme={theme} onThemeChange={handleThemeChange} onPageChange={handlePageChange} currentPage={currentPage}/>
      <ContainerCenter theme={theme} currentPage={currentPage}/>
      <ContainerRight theme={theme}/>
    </div>
  )
}

function ContainerLeft({theme,onThemeChange,onPageChange,currentPage}){
  const [showDetails,setShowDetails]=useState(false);
  
  const handleClick=()=>{
    setShowDetails(prevState=>!prevState);
  };
  return(
    <div className={`containerLeft ${theme}`}>
      <ContainerLeftTop onClick={handleClick} showDetails={showDetails} theme={theme}/>
      <ContainerLeftBody showDetails={showDetails} theme={theme} onPageChange={onPageChange} currentPage={currentPage}/>
      <ContainerLeftBottom showDetails={showDetails} onThemeChange={onThemeChange} theme={theme}/>
    </div>
  )
}
// Components for containerLeft
function ContainerLeftTop({onClick,showDetails,theme}){
  return(
    <div className={`containerLeftTop ${theme}`}>
      <div>
        <p><img src='/NL.png' alt='Neville'/></p>
        <h2>NEVOLINE</h2>
      </div>
      <button onClick={onClick}>
        <i className={`fa-solid ${showDetails? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </button>
    </div>
  )
}

function ContainerLeftBody({showDetails,theme,onPageChange,currentPage}){
  return(
    <div className={`containerLeftBody ${showDetails ? 'show' : '' } ${theme}`}>
      <div>
      <button className={`${currentPage==='Home'? 'active':''}`} onClick={()=>onPageChange('Home')}><i class="fa-solid fa-house" id='icon'></i><p>Home</p></button>
      <button className={`${currentPage==='About'?'active':''}`} onClick={()=>onPageChange('About')}><i class="fa solid fa-history" id='icon'></i><p>About Us</p></button>
      <button className={`${currentPage==='Services'?'active':''}`} onClick={()=>onPageChange('Services')}><i class="fa solid fa-cogs" id='icon'></i><p>Services</p></button>
      <button className={`${currentPage==='Projects'?'active':''}`} onClick={()=>onPageChange('Projects')}><i class="fa solid fa-code" id='icon'></i><p>Projects</p></button>
      <button className={`${currentPage==='Blogs'?'active':''}`} onClick={()=>onPageChange('Blogs')}><i class="fa solid fa-file-alt" id='icon'></i><p>Blogs</p></button>
      </div>
    </div>
  )
}
function ContainerLeftBottom({showDetails,onThemeChange,theme}){
  return(
    <div className={`containerLeftBottom ${showDetails ? 'show' : ''} ${theme}`}>
      <div>
      <p><i class="fa solid fa-palette" id='icon'></i><span>Theme</span></p>
      
      <section>
        <input type='radio' value='light' id='light' name='theme' onChange={onThemeChange} />
        <label for='light'>Light</label><br/>
      </section>

      <section>
        <input type='radio' value='dark' id='dark' name='theme' onChange={onThemeChange} defaultChecked/>
        <label for='dark'>Dark</label><br/>
      </section>

      </div>
    </div>
  )
}

function ContainerCenter({theme,currentPage}){
  let content;
  switch(currentPage){
    case 'Home':
      content=(
        <div className={`homeContainer ${theme}`}>
          <div className="top">
            <div>
              <h1>Home</h1>
              <p><span></span></p>
            </div>
          </div>
          <div className='body'>
            <div className='top'>
              <div>
                <p>Welcome to ⊂◉‿◉つNevoline Tech Solutions⊂◉‿◉つ,where innovation meets perfection.<br></br><br></br>
                  With our team of experts and iterative mode of development, we are able to underpromise and overdeliver; thereby facilitating for customer 
                  satisfaction which is our number one goal.
                </p>
              </div>
              <div>
                <img src='/NL.png' alt='Nevoline'/>
              </div>
            </div>
            <div className='content'>
                <div>
                  <img src='/Home.jpg' alt='Nevoline'/>
                </div>
                <div>
                  <p>Let's Create a Website According to Your Requirements &#128512;.</p>
                </div>
            </div>
          </div>
        </div>
      )
      break;
      case 'About':
        content=(
          <div className={`aboutContainer ${theme}`}>
            <div className='top'>
              <div>
                <h1>About Us</h1>
                <p><span></span></p>
              </div>
            </div>
            <div className='body'>
              <p>At Nevoline Tech Solutions, we are driven by a passion for crafting exceptional software solutions that empower businesses to thrive 
                in the digital age. Founded in  the year 2024, our journey began with a vision to not only become among the best tech companies, but also to 
                empower people to embrace technology.<br/><br/>
              </p>

              <h3>Our Mission</h3>
              <p id='underline'><span></span></p>
              <p>Our mission is to deliver innovative and reliable software solutions that exceed our clients' expectations. We strive 
                to streamline operations and enhance user experience.<br/><br/>
              </p>

              <h3>Our Vision</h3>
              <p id='underline'><span></span></p>
              <p>Looking ahead, we envision pioneering new technologies and expanding globally. Our goal is to create scalable software solutions facilitating 
                for customer satisfaction.<br/><br/>
              </p>

              <h3>Our Team</h3>
              <p id='underline'><span></span></p>
              <p>At Nevoline Tech Solutions, our team is our greatest asset. Comprised of passionate developers and designers with diverse expertise, we 
                collaborate closely to deliver tailored solutions that meet the unique needs of each client.<br/><br/>
              </p>

              <h3>Why Choose Us?</h3>
              <p id='underline'><span></span></p>
              <ul>
                <li>
                  <b>Expertise: </b>
                  With our team's years of experience in website development and designing, we bring unparalleled knowledge to every project.
                </li>
                <li>
                  <b>Innovation: </b>
                  We embrace cutting-edge technologies and industry best practices to ensure our solutions are always ahead of the curve.
                </li>
                <li>
                  <b>Client Focus: </b>
                  Our commitment to client satisfaction drives everything we do. We prioritize clear communication, transparency and delivering results that matter.
                </li>
              </ul>
            </div>
          </div>
        )
        break;
        case 'Services':
          content=(
            <div className={`servicesContainer ${theme}`}>
              <div className='top'>
                <div>
                  <h1>Services</h1>
                  <p><span></span></p>
                </div>
              </div>
              <div className='body'>
                <div>
                <h3>Website Development</h3>
                  <img src='/Web_dev.jpg' alt='Nevoline'/>
                  <p>Unlock the potential of your online presence with our comprehensive website development services. We specialize in creating custom, responsive and user-friendly
                    websites tailored to meet your unique business needs. From design to deployment, our expert team ensures your website not only looks great but also performs seamlessly across
                     all devices.
                  </p>
                </div>
                <div>
                <h3>Graphic Designing</h3>
                  <img src='/Graphic_Design.jpg' alt='Nevoline'/>
                  <p>Transform your brand's visual identity with our exceptional graphic design services. Our creative team is dedicated to crafting stunning visuals that 
                    communicate your message and captivate your audience. Fron logos and business cards to brochures and social media graphics, we deliver designs that are 
                    both aesthetically pleasing and strategically effective. Let us bring your vision to life with compelling graphics that set you apart in the marketplace.
                  </p>
                </div>
                <div>
                <h3>Consultations</h3>
                  <img src='/Consultation.jpg' alt='Nevoline'/>
                  <p>Navigate the complexities of the digital landscape with our expert consultation services. Our experienced consultants provide personalized guidance and strategic 
                    advice to help you achieve your business objectives. Whether you need assistance with website optimization, databases or brand strategy, we offer insights and solutions 
                    tailored to your specific challenges and goals.
                  </p>
                </div>
              </div>
            </div>
          )
          break;
          case 'Projects':
            content=(
              <div className={`projectsContainer ${theme}`}>
                <div className='top'>
                  <div>
                    <h1>Projects</h1>
                    <p><span></span></p>
                  </div>
                </div>
                <div className='body'>
                  <h2><i>Website Projects</i></h2>
                <div>
                  <img src='/Nevoline_Agrovet.png' alt='Nevoline'/>
                  <p>This is an e-commerce website for an agrovet providing functionalities for both admin and clients. 
                    With its efficient way of communication via emails, it can be integrated into a large scale agrovet business.
                  </p><br/>
                  <p><b>CLIENT</b>: Nevoline Agrovet Limited</p><br/>
                 <p><a href='https://myagrovet1.onrender.com' target='_blank' rel='noopener noreferrer'>View Project</a></p>
                </div>
                </div>
              </div>
            )
            break;
            case 'Blogs':
              content=(
                <div className={`blogsContainer ${theme}`}>
                  <div className='top'>
                    <div>
                      <h1>Blogs</h1>
                      <p><span></span></p>
                    </div>
                  </div>
                  <div className='body'></div>
                </div>
              )
              break;
              default: 
              content=(
                <div className={`homeContainer ${theme}`}>
                <div className="top">
                  <div>
                    <h1>Home</h1>
                    <p><span></span></p>
                  </div>
                </div>
                <div className='body'></div>
              </div>
              )
  }
  return(
    <div className={`containerCenter ${theme}`}>
      <p>{content}</p>
    </div>
  )
}
function ContainerRight({theme}){
  return(
    <div className={`containerRight ${theme}`}>
      <div className='top'>
        <img src='./Neville.jpg' alt='Nevoline'/>
        <h3>N.L. KHABUCHI,</h3>
        <p>C.E.O & Founder Nevoline.</p>
        <p><i>Software Engineer.</i></p><br/>
        <p><i class="fa-solid fa-quote-left"></i>At Nevoline Tech Solutions, our mission is to empower businesses through cutting-edge technology and crerative solutions. 
        Whether you're looking to build a dynamic website, create compelling graphics, or seek expert consultation, our team is here to support your goals. 
        We take pride in our commitment to quality and customer satisfaction. Thank you for trusting us with your tech needs. Let's innovate together!<i class="fa-solid fa-quote-right"></i></p>
      </div>
    </div>
  )
}

