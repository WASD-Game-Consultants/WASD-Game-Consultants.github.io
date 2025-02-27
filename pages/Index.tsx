
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ArrowRight } from "lucide-react";
import { Users, UserPlus, FileText, Video, Briefcase, HelpCircle, DollarSign, Calendar, BarChart } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Community Management",
    description: "Build and moderate vibrant player communities, creating engaging spaces where gamers can connect and share their experiences.",
  },
  {
    icon: UserPlus,
    title: "Influencer Outreach",
    description: "Develop strategic partnerships with influencers through a mix of paid and organic collaborations. Connect with creators who align with your game and brand.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Craft compelling, shareable content to enhance your online presence, engage your audience, and drive growth.",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Produce high-quality, customized videos designed to reach your target audience and support your development goals.",
  },
  {
    icon: Briefcase,
    title: "Business Development",
    description: "Allow game developers to focus on creating exceptional games while we handle the business end like licensing and publishing.",
  },
  {
    icon: HelpCircle,
    title: "Advisory",
    description: "Guide new studios through the complexities of the gaming industry.",
  },
  {
    icon: DollarSign,
    title: "Accounting & Tax",
    description: "We help studios with bookkeeping, payroll and year-end financial statements, tax returns and tax credits.",
  },
  {
    icon: Calendar,
    title: "Event Planning",
    description: "Organize exciting community events and deliver immersive staging solutions for unforgettable gaming experiences.",
  },
  {
    icon: BarChart,
    title: "Analytics",
    description: "Identify trends, analyze player feedback, and provide data-driven insights to enhance gameplay and optimize for success.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-down">
            <img
              src="/lovable-uploads/050603a7-51e2-4a7c-92d2-da8617d10a4d.png"
              alt="WASD Game Consultants"
              className="h-32 mx-auto mb-8"
            />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Level Up Your Game Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Expert consulting services for game developers and studios.<br />
              We help turn your gaming vision into reality through strategic guidance and comprehensive support.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-down">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive gaming industry consulting services to help your project succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
