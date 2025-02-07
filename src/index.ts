import express from 'express'
import { renderToBuffer } from '@react-pdf/renderer'
import { APP_PORT, APP_URL } from './env'
import { MyDocument } from './components/index'

const app = express()

const createPDF = async (data: any) => {
  return await renderToBuffer(MyDocument({ ...data }))
}

app.get('/generate-pdf', async (req, res) => {
  try {
    const pdfBuffer = await createPDF({
      user: 'Juan Pérez',
      message: 'Este es un reporte de prueba.',
    })
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename=reporte.pdf')
    res.send(pdfBuffer)
    res.send(pdfBuffer)
  } catch (error) {
    res.status(500).json({ error: 'Error al generar el PDF' })
  }
})

app.listen(APP_PORT, () => {
  console.log(`Servidor corriendo en ${APP_URL}`)
})
