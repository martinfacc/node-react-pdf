import React from "react"
import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
  page: { flexDirection: "column", padding: 30 },
  title: { fontSize: 24, textAlign: "center", marginBottom: 10 },
  text: { fontSize: 14, marginBottom: 5 },
})

export default function MyDocument(props) {
  const { user, message } = props
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Reporte Generado</Text>
        <Text style={styles.text}>Usuario: {user}</Text>
        <Text style={styles.text}>Fecha: {new Date().toLocaleDateString()}</Text>
        <Text style={styles.text}>Mensaje: {message}</Text>
      </Page>
    </Document>
  )
}

