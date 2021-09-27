const upload = (req, res) => {
  console.log(req.file);
  res.status(200).send('Arquivo enviado com sucesso!');
};

module.exports = upload;
