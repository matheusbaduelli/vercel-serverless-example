export default function handler(req, res) {
  if (req.method === 'POST') {
    const { nome } = req.body;
    res.status(200).json({ mensagem: `Olá, ${nome}` });
  } else {
    res.status(405).json({ erro: 'Método não permitido' });
  }
}
