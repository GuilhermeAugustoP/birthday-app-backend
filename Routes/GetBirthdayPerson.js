const { Contacts } = require("../data/Contacts")


// req.params.birthdate
const GetBirthdayPerson = {
    path: '/api/birthday',
    method: 'get',
    execute: () => {
        const today = new Date()
        const formatDate = today.toLocaleDateString("pt-br", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          });
          const DateSplit = formatDate.split('/')
          const DayMonth = DateSplit[0].concat('/', DateSplit[1])
        const Birthdayperson = Contacts.filter(Contacts => Contacts.birthdate.includes(DayMonth))
        const BirthdayName = Birthdayperson.map(Contact => Contact.name)
        return BirthdayName
    }
}
exports.GetBirthdayPerson = GetBirthdayPerson