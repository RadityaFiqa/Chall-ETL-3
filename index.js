const etl = {
  easy: "1",
  to: "2",
  learn: "3",
  a: "s",
};

for (let i = 0; i < Object.keys(etl).length; i++) {
  console.log(
    `Key ${Object.keys(etl)[i]} Memiliki Value ${Object.values(etl)[i]}`
  );
}

console.log(`\nObject ETL Mempunyai key sebanyak ${Object.keys(etl).length}`);
