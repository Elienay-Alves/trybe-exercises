const db = require('./db');

const getDistrictId = async (bairro, localidade, uf) => {
  const selectQuery = `
  SELECT * FROM bairros
  WHERE bairro = ?;`;
  
  const insertQuery = `
  INSERT INTO bairros (bairro, localidade, uf)
  VALUES (?, ?, ?);`;

  const districtOnDB = await db.query(selectQuery, [bairro]);

  if (districtOnDB[0].length === 0) {
    await db.query(insertQuery, [bairro, localidade, uf]);
    const newDistrict = await db.query(selectQuery, [bairro]);
    return newDistrict[0][0].id;
  }

  return districtOnDB[0][0].id;
};

module.exports = getDistrictId;