import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import Layout from '@/layouts';
import BackgroundLine from '@/components/BackgroundLine';
import { CursorContext } from '@/contexts/CursorContext';
import Project from '@/components/Project';

function Portfolio() {
  const { updateHoverState } = useContext(CursorContext);

  const [openProject, setOpenProject] = useState(false);
  const [project, setProject] = useState({});

  const projects = [
    {
      projectName: 'Fashion Store',
      projectImg: [
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610641234/Ảnh_chụp_Màn_hình_2021-01-14_lúc_22.52.47_puyjog.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610723965/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.14.53_hwye09.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610723965/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.13.02_mgrbky.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610723964/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.18.43_xhalcl.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610723966/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.16.05_icu050.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610723967/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.18.27_tsrcrv.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610723967/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.15.10_lhw6en.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610723967/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.16.52_srhvd6.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610723972/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.17.17_mq7ma9.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610723973/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.16.18_lzrsuf.png',
      ],
      projectTech: ['ReactJS', 'NodeJS', 'MongoDB'],
      projectFeatures: [
        'Live chat (socket.io)',
        'Email statistics (total sent, read)',
        'Dashboard (statistics, todolist,… )',
        'Sign up, sign in',
        'ZaloPay payment method',
        'Subsriber for news',
        'Cart',
        'News',
      ],
      projectGithub: 'https://github.com/dbaonam99/OnlineShoppingWebsite',
      projectLink: 'http://pe.heromc.net:3001',
    },
    {
      projectName: "Faculty of Law - UEL's blog",
      projectImg: [
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610641236/%E1%BA%A2nh_ch%E1%BB%A5p_M%C3%A0n_h%C3%ACnh_2021-01-14_l%C3%BAc_23.12.46_ykbozp.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725377/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.42.44_jm8szu.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725224/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.35.45_zuz4vq.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725225/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.36.01_zmrci3.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725225/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.37.50_tehbvb.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725226/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.36.14_qd5v3g.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725224/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.36.37_tnzwj4.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725226/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.39.16_gtjhsr.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725226/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.39.51_hszpwa.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725227/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.39.29_acwgh1.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725228/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.36.28_j3xnyo.png',
      ],
      projectTech: ['ReactJS', 'NodeJS', 'MongoDB'],
      projectFeatures: [
        'Email statistics (total sent, read)',
        'Dashboard (statistics, todolist,… )',
        'Sign up, sign in',
        'Subsriber for news',
        'News',
      ],
      projectGithub: null,
      projectLink: 'http://pe.heromc.net:3003',
    },
    {
      projectName: 'Pet Accessories Store',
      projectImg: [
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610641235/%E1%BA%A2nh_ch%E1%BB%A5p_M%C3%A0n_h%C3%ACnh_2021-01-14_l%C3%BAc_22.54.23_flqrym.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725778/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.47.36_yibk7l.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725768/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.47.46_pvg1r9.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725768/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.48.41_d6okx7.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725777/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.47.53_ovuzn2.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725770/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.49.00_rcnlcu.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725769/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.48.51_esram9.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725769/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.48.14_qrawwl.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610725767/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.48.04_ud6lju.png',
      ],
      projectTech: ['ReactJS', 'NodeJS', 'MongoDB'],
      projectFeatures: [
        'Live chat (socket.io)',
        'Email statistics (total sent, read)',
        'Dashboard (statistics, todolist,… )',
        'Sign up, sign in',
        'ZaloPay payment method',
        'Subsriber for news',
        'Cart',
        'News',
      ],
      projectGithub: 'https://github.com/dbaonam99/PetShopProject',
      projectLink: 'http://pe.heromc.net:3002',
    },
    {
      projectName: 'Love memory',
      projectImg: [
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610641721/%E1%BA%A2nh_ch%E1%BB%A5p_M%C3%A0n_h%C3%ACnh_2021-01-14_l%C3%BAc_23.28.27_amhwhq.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610726089/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.53.21_zqi12u.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610726089/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.53.29_his46v.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610726090/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.53.38_nag2rx.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610726090/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.54.28_xyai9k.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610726091/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.54.10_f6bh9g.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610726091/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.53.48_xpzmzw.png',
      ],
      projectTech: ['Javascript', 'HTML/CSS'],
      projectFeatures: ['Date Duration Calculator', 'Landing page', 'OWL'],
      projectGithub: 'https://github.com/dbaonam99/themefores-ilove',
      projectLink: 'https://dbaonam99.github.io/themefores-ilove/',
    },
    {
      projectName: 'Coffee Management System',
      projectImg: [
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610641235/Ảnh_chụp_Màn_hình_2021-01-14_lúc_23.06.58_y31isj.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610726787/readme_pqdkan.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610726841/Ảnh_chụp_Màn_hình_2021-01-15_lúc_23.02.38_fcb9em.png',
      ],
      projectTech: ['ReactJS', 'NodeJS'],
      projectFeatures: ['Order drinks, foods', 'Database management'],
      projectGithub: 'https://github.com/dbaonam99/CoffeeManagementSystem',
      projectLink: null,
    },
    {
      projectName: 'My Portfolio',
      projectImg: [
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610726282/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.57.11_dz4nal.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610726284/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.57.40_bdtbhr.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610726283/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.57.19_u1wvv0.png',
        'https://res.cloudinary.com/dzoxlskiz/image/upload/v1610726283/Ảnh_chụp_Màn_hình_2021-01-15_lúc_22.57.30_n6vcvz.png',
      ],
      projectTech: ['ReactJS', 'NodeJS'],
      projectFeatures: ['Animation on changing pages', 'Change mouse cusor'],
      projectGithub: 'https://github.com/dbaonam99/Portfolio',
      projectLink: 'http://pe.heromc.net:3000',
    },
  ];

  return (
    <Layout>
      <div className="Portfolio">
        <BackgroundLine />
        <Project
          setOpenProject={setOpenProject}
          openProject={openProject}
          project={project}
        />
        <div className="about-container">
          <div className="page-header flex-center">
            <div className="page-title">Projects</div>
            <div className="page-center-line" />
            <div className="page-end-line flex">
              <div className="line" />
            </div>
          </div>
          <div className="project-box flex">
            {projects &&
              projects.map((item, index) => (
                <div key={index} className="project-item">
                  <div className="project-item-line flex-col">
                    <img src={item.projectImg[0]} alt="" />
                    <div className="project-item-name">
                      <p>{item.projectName}</p>
                    </div>
                    <div
                      className="project-item-see-box flex-center"
                      onClick={() => {
                        setOpenProject(true);
                        setProject(item);
                        document.body.style.overflow = 'hidden';
                      }}
                    >
                      <div className="project-item-see flex-center">
                        <div
                          className="project-item-see-icon flex-center"
                          onMouseEnter={() => {
                            updateHoverState(true);
                          }}
                          onMouseLeave={() => {
                            updateHoverState(false);
                          }}
                        >
                          <FontAwesomeIcon icon={faEye} className="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default withRouter(Portfolio);
