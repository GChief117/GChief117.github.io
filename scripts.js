
let msnryAll, msnryAi, msnryRobotic, msnryHri, msnryCv, msnryBio, msnrySoftware, msnryQuant;

var radius = 1000;   // Larger circle
var autoRotate = true;
var rotateSpeed = -35;
var imgWidth = 165;
var imgHeight = 165;



var bgMusicURL = 'https://soundcloud.com/chasingverity/everlong-acoustic-cover';
var bgMusicControls = true;



setTimeout(init, 100);

var obox = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('a');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid];


ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";


var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {

  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;

  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
}

var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;


if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}



document.onpointerdown = function (e) {
  clearInterval(obox.timer);
  e = e || window.event;
  var sX = e.clientX,
      sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(obox);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    obox.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(obox);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(obox.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};


// Grid


//grid array for all photos
const projects = [
  {
    img: 'pictures/renamed/1.jpg',
    title: 'AI-Driven Humanoid Robot Interaction',
    category: ['human-robot-interaction', 'artificial-intelligence'],
    description: 'A study on how humanoid robots can engage with humans naturally using AI-driven conversational models. The project focuses on improving social interaction through machine learning and NLP.',
    link: 'https://www.youtube.com/shorts/6anuIOhP0yg'
  },
  {
    img: 'pictures/renamed/2.jpg',
    title: 'XMARCUS I: First Master Thesis Defense',
    category: ['robotic-surgery', 'artificial-intelligence', 'computer-vision'],
    description: 'My first master thesis, AI-assisted robotic surgery, utilizing deep learning-based tissue segmentation to detect blood in in-vivo robotic assisted surgery, using real-time object detection to assist surgeons during minimally invasive procedures.',
    link: 'https://medium.com/@gchief117/how-i-made-artificial-intelligence-to-classify-in-vivo-surgical-anatomy-my-first-master-5b85f83f8e60'
  },
  {
    img: 'pictures/renamed/3.jpg',
    title: 'XMARCUS II: Second Master Thesis Defense',
    category: ['robotic-surgery', 'artificial-intelligence', 'computer-vision'],
    description: 'My second master thesis from Imperial College London, where I conducted a comparison study between vision transformers and convolution neural networks, with OpenVINO frameworks. This project integrates CNNs for medical image processing.',
    link: 'https://medium.com/@gchief117/how-i-made-artificial-intelligence-to-classify-in-vivo-multimodal-surgical-anatomy-my-second-master-d9d678ac3fa3'
  },
  {
    img: 'pictures/renamed/4.jpg',
    title: 'Discerning Blood from a Robotic Assisted Vivo Porcine Procedure of Diaphragm Dissection "A Proof of Concept"',
    category: ['robotic-surgery', 'artificial-intelligence', 'computer-vision', 'biomedical-engineering'],
    description: 'Here I go over my computer vision grad school coursework which lead to developing convolutional neural networks for anatomy classification in robotic surgical vision.',
    link: 'https://github.com/GChief117/ECE5554?tab=readme-ov-file'
  },
  {
    img: 'pictures/renamed/5.jpg',
    title: 'Pepper Robotics Human Robotic Interaction',
    category: 'human-robot-interaction',
    description: 'As part of the Mind Music Machine Lab, I was responsible for creating 96 custom animations for Pepper.',
    link: 'https://www.youtube.com/playlist?list=PLPERBdDHWLi2jkJlAhgKkGqpkeJ7sjeoE'
  },
  {
    img: 'pictures/renamed/6.jpg',
    title: 'Deep Learning for Quantitative Finance',
    category: 'quantitative-finance',
    description: 'Backtest custom classification models in ONNX format to be converted and used for classificaiton in both MQL5 and CTrader C# program for custom Expert.',
    link: 'https://www.youtube.com/playlist?list=PLPERBdDHWLi2XBsP5JBAxEhulnjmxyuV2'
  },
  {
    img: 'pictures/renamed/7.jpg',
   title: 'AI For Robotic Surgery',
    category: ['robotic-surgery', 'biomedical-engineering'],
    description: 'In this work I breakdown my master thesis explaining thee tech stack I used, and how I built my given computer vision models with hardware capabilities.',
    link: 'https://www.youtube.com/watch?v=2FdymjTwrMA&t'
  },
  {
    img: 'pictures/renamed/8.jpg',
    title: 'Skills in Robotic Surgery',
    category: ['robotic-surgery', 'biomedical-engineering'],
    description: 'I got my start in academic medicine from publishing in the field of robotic surgery as a first author, and building upon machine learning and deep learning applications to help robotic and endoscopic surgeons advance in their skills with advanced hardware and software.',
    link: 'https://www.sages.org/meetings/annual-meeting/abstracts-archive/identifying-curriculum-gap-in-fundamentals-of-robotic-surgery-and-fundamental-skills-of-robotic-surgery-handling-adverse-events/'
  },
  {
    img: 'pictures/renamed/9.jpg',
    title: 'Real-Time Computer Vision Framework for Robotic',
    category: 'software-and-computer-engineering',
    description: 'A custom-built software framework for real-time processing of computer vision models, optimized for high-performance computing applications.',
    link: 'https://www.youtube.com/watch?v=LcXtLZmByQ4'
  },
  {
    img: 'pictures/renamed/10.jpg',
    title: 'VAROS Augmented Reality',
    category: ['software-and-computer-engineering', 'biomedical-engineering'],
    description: 'Former tech lead for such, augmented reality driven diagnostic tool for education of medical imaging data using augmented reality.',
    link: 'https://www.youtube.com/watch?v=d5Trq76RURE'
  },
  {
    img: 'pictures/renamed/11.jpg',
    title: 'Open Vino XMARCUS Dataset',
    category: ['artificial-intelligence','computer-vision', 'biomedical-engineering'],
    description: 'A neural network-based solution for automating medical image segmentation for detecting blood in the midst of charterization of smoke, enhancing robotic and endoscopic surgical vision.',
    link: 'https://github.com/GChief117/OpenVinoModelZooRoboticSurgery'
  },
  {
    img: 'pictures/renamed/12.jpg',
    title: 'XMARCUS II: 90,000 image Peripheral NERVE Tissue Dataset',
    category: ['robotic-surgery', 'biomedical-engineering'],
    description: 'As part of the thesis defense I had to create a 90,000 image dataset to be able to have my models predict preripheral nerve tissue in multi-modal classification.',
    link: 'https://medium.com/@gchief117/how-i-made-artificial-intelligence-to-classify-in-vivo-multimodal-surgical-anatomy-my-second-master-d9d678ac3fa3'
  },
  {
    img: 'pictures/renamed/13.jpg',
    title: 'AI-Multimodal Anatomical Classificaiton and Universal Robotic Surgical Hardware',
    category: ['robotic-surgery', 'biomedical-engineering'],
    description: 'In my defeneses I both give an overview of hardware adn software with the continued research of universal hardware and software for mutlimodal classification in surgical anatomy',
    link: 'https://medium.com/@GChief117'
  },
  {
    img: 'pictures/renamed/14.jpg',
    title: 'AI-Assisted Prosthetic System',
    category: ['robotic-surgery', 'biomedical-engineering'],
    description: 'A robotic-assisted prosthetic system that uses AI-based motor control for adaptive movement and real-time sensory feedback.',
    link: 'https://www.youtube.com/watch?v=8O1WcWoaAuk'
  },
  {
    img: 'pictures/renamed/15.jpg',
    title: 'CVAT JSON Computer Vision Work',
    category: ['robotic-surgery', 'biomedical-engineering', 'computer-vision', 'artificial-intelligence'],
    description: 'Showcasing surgical json data being made for convolution neural networks to pick up the patterns.',
    link: 'https://www.youtube.com/watch?v=LcXtLZmByQ4'
  },
  {
    img: 'pictures/renamed/16.jpg',
    title: 'AI-Powered Robotic Suturing System',
    category: ['robotic-surgery', 'biomedical-engineering'],
    description: 'A deep-learning-based robotic arm that can autonomously adjust its movements based on tissue elasticity during surgery.',
    link: 'https://www.youtube.com/watch?v=LcXtLZmByQ4'
  },
  {
    img: 'pictures/renamed/17.jpg',
    title: 'Machine Learning Classification for Robotic Surgical Tools vs Anatomy',
    category: ['robotic-surgery', 'computer-vision', 'biomedical-engineering'],
    description: 'The TernausNet ML architecture, has been used to classify robotic surgery parts. My talk at the 2021 JSES, focuses on increasing the accuracy of TernausNet using a 40k neuphrectomy image dataset from Imperial College of London.',
    link: 'https://www.youtube.com/watch?v=LcXtLZmByQ4'
  },
  {
    img: 'pictures/renamed/18.jpg',
    title: 'AI/Robotics Curriculum for Title-1 Schools',
    category: 'software-and-computer-engineering',
    description: 'During grad school and COVID-19, I spent my time as a STEM classroom volunteer assistant and made a comprehensive curriculum for elementary school students for robotics and AI fundamentals.',
    link: 'stem.pptx'
  },
  {
    img: 'pictures/renamed/19.jpg',
    title: 'Robotic Surgical Simulation',
    category: ['robotic-surgery', 'biomedical-engineering'],
    description: 'A portion of my research also focuses on robotic surgical simulation in Unreal Engine 5 and 3D Spaces',
    link: 'https://example.com/project19'
  },
  {
    img: 'pictures/renamed/20.jpg',
    title: 'Robot Theatre ',
    category: 'human-robot-interaction',
    description: 'As part of the Mind Music Machine Lab the following lab also had an outreach program for Title-1 schools in the New River Valley Region. ',
    link: 'https://www.youtube.com/watch?v=LTMKcTOimvg'
  },
  {
    img: 'pictures/renamed/21.jpg',
    title: 'XMARCUS II: Vision Transformer Performance Comparrison',
    category: ['computer-vision', 'artificial-intelligence'],
    description: 'In my second master thesis, I utilize deep learning-based computer vision for semantic segmentation and object detection. The system integrates Convolutional Neural Networks (CNNs) and Vision Transformers (ViTs) to classify, segment, and analyze medical and robotic imagery. Using frameworks such as TensorFlow, PyTorch, and OpenCV, the model processes multi-spectral image data, enhancing feature extraction for real-time anomaly detection in robotic-assisted surgery.',
    link: 'https://medium.com/@gchief117/how-i-made-artificial-intelligence-to-classify-in-vivo-multimodal-surgical-anatomy-my-second-master-d9d678ac3fa3'
  },
  {
    img: 'pictures/renamed/22.jpg',
    title: 'XMARCUS II: Convolutional Neural Networks with Instance Segmentation',
    category: ['computer-vision', 'artificial-intelligence', 'robotic-surgery', 'biomedical-engineering'],
    description: 'As part of my second master thesis I had to create convolution nerual networks on different dimensions between both one and two dimensions.',
    link: 'https://medium.com/@gchief117/how-i-made-artificial-intelligence-to-classify-in-vivo-multimodal-surgical-anatomy-my-second-master-d9d678ac3fa3'
  },
  {
    img: 'pictures/renamed/23.jpg',
    title: 'Computer Vision Course',
    category: ['computer-vision', 'artificial-intelligence'],
    description: 'Here, I present my course in computer vision I present on concepts between fundamental of mathematics to knowing exactly the tools and resources needed to build comprehensive computer vision models for artificial intelligence.',
    link: 'https://www.youtube.com/playlist?list=PLPERBdDHWLi1CN3p05Kf1YjVkpjW_Z6Pb'
  },
  {
    img: 'pictures/renamed/24.jpg',
    title: 'Deep Learning Course',
    category: ['artificial-intelligence'],
    description: 'Here I present my course in Deep Learning, understanding the bare foundations on how to build deep learning models from model architecture, to parameters, activiation function, benchmarking, testing, and validating a model for applicaiton.',
    link: 'https://www.youtube.com/playlist?list=PLPERBdDHWLi0XbLt9pi0kkr_J6B45Brs3'
  },
  {
    img: 'pictures/renamed/25.jpg',
    title: 'Data Structures & Algorithms in C++',
    category: ['software-and-computer-engineering'],
    description: 'Here, I showcase my knowledge on data structures & algorithms in C++',
    link: 'https://www.youtube.com/playlist?list=PLPERBdDHWLi1LIuLqNOUSp9RfWYcubF_2'
  },
  {
    img: 'pictures/renamed/26.jpg',
    title: 'C++ in under 3 Minutes',
    category: ['software-and-computer-engineering'],
    description: 'Here, I talk about the basics of C++ in under 3 minutes to udnerstand syntax, application and organization of language.',
    link: 'https://www.youtube.com/watch?v=4DMwuWfYvSc&t=7s'
  },
  {
    img: 'pictures/renamed/27.jpg',
    title: 'Blind 75 C++ Leetcode Full Tutorial Series',
    category: ['software-and-computer-engineering'],
    description: 'First person on to publish the full list of Blind 75 C++ leetcode problems. Here you can feel free to get an understanding of how I solve computer science problems, and breakdown in step-by-step organized fashion.',
    link: 'https://www.youtube.com/playlist?list=PLPERBdDHWLi1x0ZxbnCd5t8yxEudSrxxH'
  },
  {
    img: 'pictures/renamed/28.jpg',
    title: 'Comprehensive Quantitative Finance',
    category: ['quantitative-finance'],
    description: 'As part of my quantitative finance course I made, I go over quantitative finance principles, utilizing Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTM) networks for time-series prediction of forex markets, using GARCH volatility modeling, mean-reverting scalping strategies, combined with Monte Carlo simulations, to optimize trade execution.',
    link: 'https://www.youtube.com/playlist?list=PLPERBdDHWLi2XBsP5JBAxEhulnjmxyuV2'
  },
  {
    img: 'pictures/renamed/29.jpg',
    title: 'Data Structures & Algoritms in Under 5 Minutes',
    category: ['software-and-computer-engineering'],
    description: 'For any computer engineering concepts the following work showcases in how I mentor and breakdown concepts to mentees, I go through a step by step breakdown to understand on a comprehensive level prior,',
    link: 'https://www.youtube.com/watch?v=_lTMeHPOFsA&t'
  },
  {
    img: 'pictures/renamed/30.jpg',
    title: 'System Design: Building Data Intensive Applications',
    category: ['software-and-computer-engineering'],
    description: 'Here I created a system design course to teach about fundamentals of system design for large scale applications and udnersatnding how to think about data, and training data systems with scalability, security, and high-performance in mind.',
    link: 'https://www.youtube.com/playlist?list=PLPERBdDHWLi2uNVqv7u0b5oRCng3KDnoz'
  },
  {
    img: 'pictures/renamed/31.jpg',
    title: 'Self Published 26 iOS Apps on the App Store',
    category: ['software-and-computer-engineering'],
    description: 'For a 2023 New Years Resolution goal I accomplisehd I give the comprehensive breakdown of bootstrapping, solo development, and what to expect when publishing software.',
    link: 'https://medium.com/@gchief117/recap-of-self-publishing-26-ios-apps-on-the-app-store-2023-and-getting-over-3000-organic-users-b0427da1ed24'
  },
  {
    img: 'pictures/renamed/32.jpg',
    title: 'Redefining the Digitial Paradigm for Virtual Museums',
    category: ['software-and-computer-engineering'],
    description: 'Develop a web-based virtual museum for the Liberation War Museum in Dhaka, Bangladesh to present to students, using Unity and international collaboration, to then have thw rok published in a conference paper.',
    link: 'https://link.springer.com/chapter/10.1007/978-3-030-77411-0_23'
  },
  {
    img: 'pictures/renamed/33.jpg',
    title: 'Calculus 1-3 in Under 5 Minutes',
    category: ['software-and-computer-engineering'],
    description: 'For any computer engineering concepts the following work showcases in how I mentor and breakdown concepts to mentees, I go through a step by step breakdown to understand on a comprehensive level prior,',
    link: 'https://www.youtube.com/watch?v=iG0HBp66lc8'
  },
  {
    img: 'pictures/renamed/34.jpg',
    title: 'How To Build an LLM From Scratch With No GPU in Under 15 Minutes',
    category: ['software-and-computer-engineering'],
    description: 'A comprehensive tutorial on building a Large Language Model from scratch, explaining transformers, tokenization, and training optimization.',
    link: 'https://www.youtube.com/watch?v=Nyqn91Dnhh0&t=5s'
  }
];

const masonryInstances = {};
let activeCategory = 'all';

// Initialize all Masonry grids
function initMasonry(gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  imagesLoaded(grid, () => {
    // Destroy existing instance
    if (masonryInstances[gridId]) {
      masonryInstances[gridId].destroy();
    }
    
    masonryInstances[gridId] = new Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-item',
      percentPosition: true,
      gutter: 20,
      horizontalOrder: true // Ensures proper layout
    });
  });
}

// Create grid containers and populate them
function createCategoryGrids() {
  const categories = [
    'all', 'artificial-intelligence', 'robotic-surgery',
    'human-robot-interaction', 'computer-vision', 'biomedical-engineering',
    'software-and-computer-engineering', 'quantitative-finance'
  ];

  // Create container for all grids
  const container = document.createElement('div');
  container.id = 'grids-container';
  document.querySelector('#patents').appendChild(container);

  // Create individual grids
  categories.forEach(category => {
    const grid = document.createElement('div');
    grid.id = `grid-${category}`;
    grid.className = 'category-grid';
    grid.style.display = category === 'all' ? 'block' : 'none';
    container.appendChild(grid);
  });

    const addedProjects = new Map();


  // Populate grids
  projects.forEach(project => {
    const projectCategories = Array.isArray(project.category) ? 
      project.category : [project.category];

    // Add to 'all' grid
        // Add to 'all' grid only once
    if (!addedProjects.has('all-' + project.img)) {
      appendItemToContainer(project, 'grid-all');
      addedProjects.set('all-' + project.img, true);
    }


    // Add to category grids
    projectCategories.forEach(cat => {
      const gridId = `grid-${cat}`;
      if (!addedProjects.has(gridId + '-' + project.img)) {
        appendItemToContainer(project, gridId);
        addedProjects.set(gridId + '-' + project.img, true);
      }
    });
  });

  // Initialize Masonry for all grids
  categories.forEach(category => {
    initMasonry(`grid-${category}`);
  });
}

// Modified filter button handler
function handleFilterClick(filterValue) {
    document.querySelectorAll('.category-grid').forEach(grid => {
        grid.style.display = 'none';
    });

    const selectedGrid = document.getElementById(`grid-${filterValue}`);
    if (selectedGrid) {
        selectedGrid.style.display = 'block';
        setTimeout(() => {
            if (masonryInstances[`grid-${filterValue}`]) {
                masonryInstances[`grid-${filterValue}`].layout(); // Force re-layout
            }
        }, 500);
    }
}




function updateFilterCounts() {
  const categories = {
    'all': projects.length,
    'artificial-intelligence': 0,
    'robotic-surgery': 0,
    'human-robot-interaction': 0,
    'computer-vision': 0,
    'biomedical-engineering': 0,
    'software-and-computer-engineering': 0,
    'quantitative-finance': 0
  };

  projects.forEach(project => {
    const cats = Array.isArray(project.category) ? project.category : [project.category];
    cats.forEach(cat => {
      if (categories.hasOwnProperty(cat)) categories[cat]++;
    });
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    const filter = btn.dataset.filter;
    const count = categories[filter];
    if (!btn.querySelector('.count')) {
      const span = document.createElement('span');
      span.className = 'count';
      span.style.marginLeft = '8px';
      span.style.fontSize = '0.8em';
      btn.appendChild(span);
    }
    btn.querySelector('.count').textContent = `(${count})`;
  });
}

function appendItemToContainer(project, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Create grid item
  const item = document.createElement('div');
  item.className = 'grid-item';
  
  // Create image element
  const img = document.createElement('img');
  img.src = project.img;
  img.alt = project.description;
  
  // On click, open the modal with all project info
  item.addEventListener('click', () => {
    openExhibitModal(
      project.img,
      project.description,
      project.link,
      project.title // pass the project.title to the modal
    );
  });

  // Add image to the .grid-item
  item.appendChild(img);
  container.appendChild(item);
}


// Call this after creating projects array
//updateFilterCounts();




/****************************************************
 * 3) OPEN & CLOSE THE EXHIBIT MODAL
 ****************************************************/
function openExhibitModal(imgSrc, description, linkUrl, title) {
  const modal = document.getElementById('exhibitModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalDescription = document.getElementById('modalDescription');
  const modalLink = document.getElementById('modalLink');

  // Populate the modal content
  modalTitle.textContent = title;             // NEW: sets the <h2> content
  modalImage.src = imgSrc;
  modalDescription.textContent = description;
  modalLink.href = linkUrl;

  // Show the modal
  modal.style.display = 'block';
}

// Close the modal when user clicks the "X"
const modalCloseBtn = document.getElementById('modalClose');
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', () => {
    document.getElementById('exhibitModal').style.display = 'none';
  });
}

// Optional: Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  const modal = document.getElementById('exhibitModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Ensure the DOM is fully loaded before running this
document.addEventListener("DOMContentLoaded", function() {
    // Select all carousel links inside #spin-container
    const carouselAnchors = document.querySelectorAll('#spin-container a');

    // Loop through each anchor, and attach a click event listener
    carouselAnchors.forEach((anchor, index) => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent navigation to the href
            
            // Find the project based on index
            const project = projects[index];

            // If the project exists, open its modal
            if (project) {
                openExhibitModal(project.img, project.description, project.link, project.title);
            }
        });
    });
});


// Update initialization code
document.addEventListener("DOMContentLoaded", function () {
    createCategoryGrids(); // Creates the grids

    // Wait for images to load before initializing Masonry
    setTimeout(() => {
        Object.keys(masonryInstances).forEach(gridId => {
            initMasonry(gridId);
        });
    }, 1000);

    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            handleFilterClick(button.dataset.filter);
        });
    });

    document.querySelector('.filter-btn[data-filter="all"]').click();
});


