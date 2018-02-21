const storeFunc = require('../helpers/storeFunc');
const Models = require('../../models');

const handler = (request, response) => {
  storeFunc().then((records) => {
    const newRecords = records.map((record) => {
      Models.likestable.findAll().then((likes) => {
        if (likes.length === 0) {
          Models.likestable.create({
            id: record.bookid,
            bookid: record.bookid,
            likestatus: 'dislike',
          });
        }
      });
      return Models.likestable.findAll({
        where: {
          bookid: record.bookid,
        },
      }).then((likeRecord) => {
        const newRecord = record.dataValues;
        newRecord.likestatus = likeRecord[0].dataValues.likestatus;
        console.log(newRecord);
        return newRecord;
      });
    });
    (Promise.all(newRecords).then(data => response(data)));
  });
};

module.exports = [{
  path: '/allbooks',
  method: 'GET',
  handler,
}];
