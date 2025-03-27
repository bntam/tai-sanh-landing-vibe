
import React from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "../ui/AnimatedSection";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-taisan-background-light bg-pattern">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-taisan/10 text-taisan rounded-full text-sm font-medium mb-4">
              Liên hệ
            </div>
            <h2 className="heading-lg text-taisan-dark mb-4">
              Liên hệ với{" "}
              <span className="text-taisan">Tái Sanh</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Bạn có thể đến trực tiếp hoặc liên hệ qua điện thoại để được tư vấn và đặt lịch khám.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection direction="left">
            <div className="bg-white rounded-xl shadow-card p-6 md:p-8 border border-taisan/10">
              <h3 className="heading-sm text-taisan-dark mb-6">Thông tin liên hệ</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-taisan/10 flex items-center justify-center mt-1 text-taisan">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Địa chỉ</h4>
                    <p className="text-muted-foreground">
                    228 Lê Lợi, Phường 5, Tuy Hòa, Phú Yên
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-taisan/10 flex items-center justify-center mt-1 text-taisan">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Điện thoại</h4>
                    <p className="text-muted-foreground">
                      <a href="tel:0984438960" className="hover:text-taisan transition-colors">
                        098 44 38 960
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-taisan/10 flex items-center justify-center mt-1 text-taisan">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Giờ làm việc</h4>
                    <p className="text-muted-foreground">
                    Tất cả các ngày trong tuần, cả ngày lễ <br />
                    Sáng từ 7 giờ 30 đến 11 giờ 30 <br />
                    Chiều từ 14 giờ đến 18 giờ  <i>(2 giờ chiều đến 6 giờ tối)</i>
                    </p>
                  </div>
                </div>
                
                {/* <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-taisan/10 flex items-center justify-center mt-1 text-taisan">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@taisanh.com" className="hover:text-taisan transition-colors">
                        info@taisanh.com
                      </a>
                    </p>
                  </div>
                </div> */}
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="w-full btn-primary"
                  onClick={() => window.open("tel:0984438960")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Gọi ngay để đặt lịch
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200}>
            <div className="aspect-video overflow-hidden rounded-xl shadow-card bg-white p-2 border border-taisan/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15544.487667958078!2d109.3072376!3d13.091459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316fec3ee5720071%3A0x57c2808283d0c8be!2zUGjDsm5nIENo4bqpbiBUcuG7iyBZIEjhu41jIEPhu5UgVHJ1eeG7gW4gVMOhaSBTYW5o!5e0!3m2!1svi!2s!4v1743058683051!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
