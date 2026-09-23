/**
 * DeutschPath site configuration.
 *
 * Leave a string empty to keep the public "To be published" state.
 * Do not invent phone numbers, addresses, or social URLs here.
 *
 * consultationEndpoint / contactEndpoint
 *   Optional JSON APIs. Consultation also posts to googleForms.consultation
 *   when configured (Google Form formResponse).
 */
window.DEUTSCHPATH = {
  siteUrl: "https://deutschpath404.github.io",
  contact: {
    phone: "01796727926",
    whatsapp: "01721914666",
    email: "deutschpath404@gmail.com",
    address: "Mohammadpur, Dhaka",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
      youtube: ""
    }
  },
  api: {
    consultationEndpoint: "",
    contactEndpoint: ""
  },
  googleForms: {
    consultation: {
      action: "https://docs.google.com/forms/d/e/1FAIpQLSdGcWxa0YNBa40z67k89fSHNc68PQaWBBbOisl_fY9pBZ7YNA/formResponse",
      entries: {
        fullName: "43219094",
        email: "551666895",
        phone: "819122107",
        country: "635714192",
        level: "1095958423",
        intendedField: "1737356023",
        qualification: "53438075",
        cgpa: "803896236",
        englishTest: "245916363",
        intake: "1019500622",
        message: "1437443578",
        preferredDate: "1845625391",
        preferredTime: "1017873454"
      },
      englishChoices: ["MOI", "IELTS", "Gre", "TOEFL", "PTE"]
    }
  }
};
