import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import Htext from "@/shared/Htext";

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {

  const inputStyles = "w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5";

  const { register, trigger, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    const isValid = await trigger();
    if (!isValid) {
      data.preventDefault();
    }
  }

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div className="md:w-3/5"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 }
          }}>
          <Htext>
            <span className="text-primary-500">JOIN NOW </span>TO GET IN SHAPE
          </Htext>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ullam nihil eveniet quos, nam deleniti architecto eos non est incidunt. Omnis, quos unde. Blanditiis veritatis, odio ipsum sapiente hic id.
          </p>
        </motion.div>
        {/* FORM */}

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div className="mt-10 basis-3/5 md:mt-0"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}>
            <form target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/c8e03c27fb491a70ada292c8bf94e16e"
              method="POST">
              <input className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })} />
              {errors.name &&
                (<p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "Name is required"}
                  {errors.name.type === "maxLength" && "Name should be less than 100 characters"}
                </p>
                )}
              <input className={inputStyles}
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                })} />
              {errors.email &&
                (<p className="mt-3 text-primary-500">
                  {errors.email.type === "required" && "Email is required"}
                  {errors.email.type === "pattern" && "Email is invalid"}
                </p>
                )}
              <textarea className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 500,
                })} />
              {errors.message &&
                (<p className="mt-3 text-primary-500">
                  {errors.message.type === "required" && "Message is required"}
                  {errors.message.type === "maxLength" && "Message should be less than 500 characters"}
                </p>
                )}
              <button type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-16 py-3 transition duration-500 hover:text-white">
                Submit
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 }
            }}>
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
               className="sm:w-full w-4/5" alt="contactus" src={ContactUsPageGraphic}/>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs;