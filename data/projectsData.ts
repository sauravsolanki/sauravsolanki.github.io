interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  tags?: string[]
  highlight?: boolean
}

const projectsData: Project[] = [
  {
    title: 'Intent Detection & Query AutoComplete at Scale',
    description: `Built real-time intent recognition system achieving <500ms latency with ~70% accuracy improvement. Implemented Query AutoComplete using Ghosting approach with N-gram models, custom vocabulary, and fine-tuned GPT-2 for intelligent suggestion ranking at SumoLogic.`,
    imgSrc: '/static/images/intent-detection.png',
    href: '/blog/intent-detection-nlp',
    tags: ['NLP', 'GPT-2', 'Production ML'],
    highlight: true,
  },
  {
    title: 'Enterprise MLOps Platform on AWS',
    description: `Designed and deployed an automated MLOps system that reduced ML cycle time by 90%. Manages end-to-end model lifecycles: training, versioning, serving, A/B testing, and drift detection using AWS SageMaker, MLFlow, and Kubernetes.`,
    imgSrc: '/static/images/mlops-platform.png',
    href: '/blog/mlops-automation-aws',
    tags: ['MLOps', 'AWS', 'Kubernetes'],
    highlight: true,
  },
  {
    title: 'Edge AI & Model Optimization',
    description: `Improved edge inference speed by 25-30% via quantization (QAT, TFLite, TensorRT, OpenVINO) and pruning. Built DeepOps for real-time edge device management—provisioning, tracking, health monitoring—reducing model management time by 80%.`,
    imgSrc: '/static/images/edge-ai.png',
    href: '/blog/edge-ai-optimization',
    tags: ['Edge AI', 'TensorRT', 'Model Optimization'],
    highlight: true,
  },
  {
    title: 'Computer Vision for Solar Construction',
    description: `Reduced weekly construction site reports time by 70% using ML models (YOLOv8, UNet, SAM, Transformers) for materials detection. Built event-driven integration handling 1000+ concurrent jobs with FastAPI, Airflow, and AWS Lambda.`,
    imgSrc: '/static/images/solar-cv.png',
    href: '/blog/computer-vision-solar',
    tags: ['Computer Vision', 'YOLOv8', 'SAM'],
    highlight: false,
  },
  {
    title: 'MAVI: Mobility Assistance for Visually Impaired',
    description: `Led a team of 6 at IIT Delhi developing intelligent edge devices for visually impaired individuals. Implemented object detection, signboard reading, and face recognition achieving 40-70% faster processing on Raspberry Pi + Neural Compute Stick 2.`,
    imgSrc: '/static/images/mavi-research.png',
    href: '/blog/mavi-iit-delhi',
    tags: ['Research', 'Edge Computing', 'Social Impact'],
    highlight: false,
  },
  {
    title: 'Detecting Harmful Content on Instagram',
    description: `System design exploration on detecting harmful content using NLP, Computer Vision, and ML at scale. Covers sentiment analysis, hate speech detection, content filtering, and real-time moderation strategies.`,
    imgSrc: '/static/images/instagram.png',
    href: '/blog/harmful-content-detection',
    tags: ['System Design', 'NLP', 'Content Moderation'],
    highlight: false,
  },
]

export default projectsData
