"use client";
import Spinner from "@/components/loaders/Spinner";
import { IContactForm } from "@/types/IContactForm";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation"; // Import useSearchParams from next/navigation
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { content } from "@/data/content";

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams(); // Initialize useSearchParams
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      FullName: "",
      Email: "",
      PhoneNumber: "",
      Service: "",
      Message: "",
    },
    mode: "onTouched",
  });

  useEffect(() => {
    const query = searchParams.get("s");
    if (query) {
      const service = content.services.find((service) => service.id === query);
      if (service) {
        setValue("Service", service.title, { shouldValidate: true });
        console.log(
          "Set Service to:",
          service.title,
          "Current value:",
          watch("Service"),
        );
      }
    }
  }, [searchParams, setValue, watch]);

  const handleServiceChange = (value: string) => {
    setValue("Service", value, { shouldValidate: true });
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.delete("s");
    router.replace(newUrl.pathname + newUrl.search, { scroll: false });
  };

  function generateEmailHTML(data: IContactForm) {
    const formattedMessage = data.Message.replace(/\n/g, "<br>");
    return `<div><p><strong>Namn:</strong></p><p>${data.FullName}</p><p><strong>Email:</strong></p><p><a href="mailto:${data.Email}">${data.Email}</a></p><p><strong>Telefon:</strong></p><p><a href="tel:${data.PhoneNumber}">${data.PhoneNumber}</a></p><p><strong>Intresserad av tjänst:</strong></p><p>${data.Service}</p><p><strong>Meddelande:</strong></p><p>${formattedMessage}</p></div>`;
  }

  const onSubmit = async (data: IContactForm) => {
    const formData = {
      name: data.FullName,
      email: data.Email,
      service: data.Service,
      subject: `Kontaktformulär - ${data.FullName}`,
      message: data.Message,
      messageHtml: generateEmailHTML(data),
    };
    toast
      .promise(
        fetch("/api/contact-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }),
        {
          loading: "Skickar meddelande...",
          success: "Meddelande skickat!",
          error: "Ett fel uppstod.",
        },
        {
          style: {
            minWidth: "250px",
          },
          position: "bottom-center",
          className: "!bg-primary !text-background",
          success: {
            duration: 8000,
          },
        },
      )
      .catch((error) => {
        console.log(error.message);
      })
      .then(() => {
        setFormSubmitted(true);
        setTimeout(() => {
          reset();
        }, 250);
      });
  };

  const [formType, setFormType] = useState("project");

  const baseClasses =
    "text-base w-full px-4 py-2.5 border-primary/25 shadow-sm rounded-sm focus:outline-none border ring-0 focus:outline-1 focus:border-primary focus-visible:outline-offset-0 transition-all duration-500 ease-in-out";

  const errorClass =
    "outline outline-1 outline-offset-0 outline-red-500 placeholder:text-red-500";
  const errorTextBaseClass =
    "text-red-500 text-xs font-medium transition-all duration-500 ease-in-out";
  const errorTextHiddenClasses = "opacity-0 max-h-0 ";
  const errorTextVisibleClasses = "my-2 opacity-100 max-h-full";

  return (
    <div className="relative flex flex-col gap-4 md:gap-8 rounded-sm bg-background p-4 lg:p-8">
      <div className="flex justify-center">
        <div
          className={twMerge(
            "flex flex-1 cursor-pointer justify-center border-b-2 px-2 py-4 text-sm transition-all duration-300 ease-in-out md:text-base lg:px-6",
            formType === "project" ? "border-primary" : "opacity-50",
          )}
          onClick={() => setFormType("project")}
        >
          Jag vill diskutera ett projekt med er
        </div>
        <div
          className={twMerge(
            "flex flex-1 cursor-pointer justify-center border-b-2 px-2 py-4 text-sm transition-all duration-300 ease-in-out md:text-base lg:px-6",
            formType === "franchise" ? "border-primary" : "opacity-50",
          )}
          onClick={() => setFormType("franchise")}
        >
          Jag är intresserad av att bli franchisetagare
        </div>
      </div>
      {formType === "franchise" && <></>}
      {formType === "project" && <></>}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-12 flex w-full flex-col gap-3"
        name="contact-form"
      >
        <input type="hidden" name="required-field" value="contact-form" />
        <div className="flex flex-col gap-2">
          <label className="text-base" htmlFor="FullName">
            För- och efternamn
          </label>
          <input
            className={twMerge(
              baseClasses,
              errors["FullName"] ? errorClass : "",
            )}
            type="text"
            {...register("FullName", {
              required: "Fyll i namn",
              minLength: {
                value: 2,
                message: "Minst 2 tecken",
              },
              maxLength: {
                value: 50,
                message: "Max 50 tecken",
              },
            })}
          />
          <p
            role="alert"
            className={twMerge(
              errorTextBaseClass,
              errors["FullName"]
                ? errorTextVisibleClasses
                : errorTextHiddenClasses,
            )}
          >
            {errors.FullName?.message}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base" htmlFor="Email">
            E-postadress
          </label>
          <input
            className={twMerge(baseClasses, errors["Email"] ? errorClass : "")}
            type="email"
            {...register("Email", {
              required: "Fyll i email",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Ogiltig emailadress",
              },
            })}
          />
          <p
            role="alert"
            className={twMerge(
              errorTextBaseClass,
              errors["Email"]
                ? errorTextVisibleClasses
                : errorTextHiddenClasses,
            )}
          >
            {errors.Email?.message}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base" htmlFor="PhoneNumber">
            Telefonnummer
          </label>
          <input
            className={twMerge(
              baseClasses,
              errors["PhoneNumber"] ? errorClass : "",
            )}
            type="tel"
            {...register("PhoneNumber", {
              onChange: (e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              },
              required: "Fyll i telefonnummer",
              pattern: {
                value: /^[0-9]+$/,
                message: "Ogiltigt telefonnummer",
              },
              minLength: {
                value: 10,
                message: "Minst 10 siffror",
              },
              maxLength: {
                value: 15,
                message: "Max 15 siffror",
              },
            })}
          />
          <p
            role="alert"
            className={twMerge(
              errorTextBaseClass,
              errors["PhoneNumber"]
                ? errorTextVisibleClasses
                : errorTextHiddenClasses,
            )}
          >
            {errors.PhoneNumber?.message}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base" htmlFor="Service">
            Tjänst
          </label>
          <Select
            key={watch("Service")}
            onValueChange={handleServiceChange}
            value={watch("Service") || ""}
          >
            <SelectTrigger
              className={twMerge(
                baseClasses,
                "rounded-sm bg-white",
                errors["Service"] ? errorClass : "",
              )}
            >
              <SelectValue placeholder="Vad behöver du hjälp med?" />
            </SelectTrigger>
            <SelectContent className="rounded bg-white">
              <SelectGroup>
                <SelectLabel>Välj en tjänst</SelectLabel>
                {content.services.map((service) => (
                  <SelectItem value={service.title} key={service.id}>
                    {service.title}
                  </SelectItem>
                ))}
                <SelectItem value="Annat">Annat</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <p
            role="alert"
            className={twMerge(
              errorTextBaseClass,
              errors["Service"]
                ? errorTextVisibleClasses
                : errorTextHiddenClasses,
            )}
          >
            {errors.Service?.message}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base" htmlFor="Message">
            Meddelande
          </label>
          <textarea
            maxLength={500}
            className={twMerge(
              "h-64 resize-none whitespace-pre-line",
              baseClasses,
              errors["Message"] ? errorClass : "",
            )}
            {...register("Message", {
              required: "Fyll i meddelande",
              minLength: {
                value: 10,
                message: "Minst 10 tecken",
              },
              maxLength: {
                value: 500,
                message: "Max 500 tecken",
              },
            })}
          ></textarea>
          <p
            role="alert"
            className={twMerge(
              errorTextBaseClass,
              errors["Message"]
                ? errorTextVisibleClasses
                : errorTextHiddenClasses,
            )}
          >
            {errors.Message?.message}
          </p>
        </div>

        <button
          disabled={isSubmitting || formSubmitted}
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-sm bg-primary/90 px-4 py-4 text-background ring-1 ring-background backdrop-blur-sm hover:bg-primary"
        >
          {isSubmitting ? (
            <Spinner
              primaryColor="text-primary"
              secondaryColor="text-background"
              strokeWidth={4}
              height={24}
              width={24}
            />
          ) : (
            "Skicka"
          )}
        </button>
      </form>
      <div className="flex items-center gap-8">
        <div className="flex items-center -space-x-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary">
            <Image quality={100} src="/anton.png" fill alt="" />
          </div>
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary">
            <Image quality={100} src="/joel.png" fill alt="" />
          </div>
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary">
            <Image quality={100} src="/ludwig.png" fill alt="" />
          </div>
        </div>
        <div className="text-sm opacity-50">
          Vi svarar vanligtvis samma dag på vardagar (Måndag - Fredag,
          09:00 - 17:00).
        </div>
      </div>

      <div
        className={twMerge(
          "absolute inset-0 left-0 top-0 -m-2 overflow-hidden backdrop-blur-sm transition-all delay-75 duration-500 ease-in-out lg:backdrop-blur-sm",
          formSubmitted ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div
          className={twMerge(
            "flex h-full transform flex-col items-center justify-center space-y-4 transition-all duration-500 ease-in-out",
            formSubmitted ? "translate-y-0" : "translate-y-[125%]",
          )}
        >
          <h6 className="text-2xl md:text-3xl lg:text-center">
            Meddelande skickat!
          </h6>
          <p className="whitespace-pre-line text-balance text-xl lg:text-center lg:text-xl">
            Tack! Vi återkopplar så fort vi kan.
          </p>
          <button
            onClick={() => setFormSubmitted(false)}
            className="inline-block rounded-sm bg-primary p-2 px-4 text-center text-xs text-background transition-all duration-200 ease-in-out"
          >
            Stäng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
