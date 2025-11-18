import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const defaultMeta = {
  title: 'Niroga.ai - AI-Powered Health Solutions | Advanced Medical Diagnostics',
  description: 'Niroga.ai delivers cutting-edge AI-powered health solutions for accurate medical diagnostics. Revolutionary technology for healthcare professionals and patients with advanced audio-based disease detection.',
  keywords: 'AI health solutions, medical diagnostics, artificial intelligence healthcare, AI medical devices, health technology, medical AI, disease detection, healthcare innovation',
  image: 'https://niroga.ai/niroga-logo.png',
  baseUrl: 'https://niroga.ai',
  type: 'website'
};

export default function SEOHead({ 
  title = defaultMeta.title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  image = defaultMeta.image,
  url,
  type = defaultMeta.type
}: SEOHeadProps) {
  const location = useLocation();
  const currentUrl = url || `${defaultMeta.baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', type, true);

    // Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:url', currentUrl);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

  }, [title, description, keywords, image, currentUrl, type]);

  return null;
}

// Page-specific metadata configurations
export const pageMetadata = {
  home: {
    title: 'Niroga.ai - AI-Powered Health Solutions | Advanced Medical Diagnostics',
    description: 'Revolutionary AI-powered health solutions for accurate medical diagnostics. Advanced technology transforming healthcare with audio-based disease detection and intelligent health monitoring.',
    keywords: 'AI health solutions, medical diagnostics, artificial intelligence healthcare, AI medical devices, health technology, audio-based diagnostics',
    image: 'https://niroga.ai/niroga-logo.png'
  },
  about: {
    title: 'About Niroga.ai - Our Mission to Transform Healthcare with AI',
    description: 'Learn about Niroga.ai\'s mission to revolutionize healthcare through AI-powered solutions. Meet our team of experts dedicated to making quality healthcare accessible to all.',
    keywords: 'about niroga, healthcare AI company, medical AI team, healthcare innovation, AI healthcare mission',
    image: 'https://niroga.ai/niroga-logo.png'
  },
  technology: {
    title: 'AI Technology - Advanced Medical Diagnostic Solutions | Niroga.ai',
    description: 'Explore Niroga.ai\'s cutting-edge AI technology for medical diagnostics. Learn how our advanced algorithms and audio-based analysis revolutionize disease detection.',
    keywords: 'AI technology, medical AI algorithms, audio analysis, machine learning healthcare, diagnostic technology, AI innovation',
    image: 'https://niroga.ai/niroga-logo.png'
  },
  devices: {
    title: 'Medical Devices - AI-Powered Diagnostic Tools | Niroga.ai',
    description: 'Discover Niroga.ai\'s range of AI-powered medical devices designed for accurate, non-invasive diagnostics. Advanced tools for healthcare professionals and patients.',
    keywords: 'medical devices, AI diagnostic tools, healthcare devices, medical equipment, diagnostic instruments, AI health devices',
    image: 'https://niroga.ai/niroga-logo.png'
  },
  solutions: {
    title: 'Healthcare Solutions - AI-Powered Medical Services | Niroga.ai',
    description: 'Comprehensive AI-powered healthcare solutions for hospitals, clinics, and defense veterans. Transforming patient care with intelligent diagnostics and monitoring.',
    keywords: 'healthcare solutions, medical services, AI healthcare, clinical solutions, hospital technology, veteran healthcare',
    image: 'https://niroga.ai/niroga-logo.png'
  },
  contact: {
    title: 'Contact Niroga.ai - Get in Touch for AI Health Solutions',
    description: 'Contact Niroga.ai for inquiries about our AI-powered health solutions. Reach out to our team for partnerships, support, or product information.',
    keywords: 'contact niroga, healthcare AI contact, medical AI inquiry, customer support, partnership inquiry',
    image: 'https://niroga.ai/niroga-logo.png'
  },
  privacyPolicy: {
    title: 'Privacy Policy - How Niroga.ai Protects Your Health Data',
    description: 'Read Niroga.ai\'s comprehensive privacy policy. Learn how we protect your personal and health information with HIPAA-compliant security measures.',
    keywords: 'privacy policy, data protection, HIPAA compliance, health data security, medical privacy, patient data protection',
    image: 'https://niroga.ai/niroga-logo.png',
    type: 'article'
  },
  termsOfService: {
    title: 'Terms of Service - Legal Terms for Niroga.ai Services',
    description: 'Review Niroga.ai\'s terms of service. Understand your rights and responsibilities when using our AI-powered health solutions and medical devices.',
    keywords: 'terms of service, legal terms, service agreement, medical device terms, healthcare terms, user agreement',
    image: 'https://niroga.ai/niroga-logo.png',
    type: 'article'
  }
};
