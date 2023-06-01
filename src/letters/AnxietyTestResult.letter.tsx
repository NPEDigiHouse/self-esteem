import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image
} from "@react-pdf/renderer";
import { TestResult } from "../utils/const/types";
// Create styles
export interface IAnxietyTestResult {
  name: String;
  result: TestResult;
  percentage: number | null;
  
}

// Create Document Component
const AnxietyTestResult: React.FC<IAnxietyTestResult> = ({ name, percentage, result }) => (
  <PDFViewer style={styles.viewer}>
    <Document title={`Hasil Tes Kecemasan - ${name}`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.content}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentTitleText}>
              DEPARTEMEN PENDIDIKAN NASIONAL
            </Text>
            <Text style={styles.contentTitleText}>
              UIN SATU SAYYID ALI RAHMATULLAH TULUNGAGUNG
            </Text>
            <Text style={styles.contentTitleText}>
              FAKULTAS USHULUDDIN ADAB DAN DAKWAH
            </Text>
            <Text style={styles.contentTitleText}>
              JURUSAN BIMBINGAN KONSELING ISLAM
            </Text>
            <Text style={styles.contentTitleText2}>
              LAPORAN HASIL KECEMASAN SOSIAL PADA SISWA
            </Text>
          </View>

          <View style={styles.students}>
            <View style={styles.biodata}>
              <View style={styles.studentData}>
                <Text style={styles.data}>Nama</Text>
              </View>
              <View style={styles.studentDataValue}>
                <Text style={styles.data}>: {name}</Text>
                {/* <Text style={styles.data}></Text> */}
              </View>
            </View>

            <View>
              <Text style={styles.headerTextContent}>
                Dari hasil perhitungan angket yang sudah Anda isi diperoleh
                hasil presentase sebesar {percentage} %. Dengan ini Anda
                dinyatakan masuk dalam kategori {result}. (jika
                hasilnya rendah-sedang yang ditampilkan adalah, manfaat tidak
                memiliki kecemasan, diantaranya mampu meningkatkan self esteem
                sehingga dapat menerima segala kelebihan dan kekurangan yang
                dimiliki, mendapatkan kepuasan hidup, kesehatan fisik dan
                psikologis lebih terjaga, memudahkan untuk berinteraksi sosial.)
                (jika hasilnya tinggi maka yang ditampilkan dampak dari
                kecemasan sosial, diantaranya kesulitan dalam situasi sosial,
                harga diri yang rendah, performa akademis yang menurun bahkan
                buruk, masalah kesehatan fisik, dan juga dapat berdampak pada
                hubungan interpersonal dengan orang lain.)
              </Text>
            </View>
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.content}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentTitleText}>
              DEPARTEMEN PENDIDIKAN NASIONAL
            </Text>
            <Text style={styles.contentTitleText}>
              UIN SATU SAYYID ALI RAHMATULLAH TULUNGAGUNG
            </Text>
            <Text style={styles.contentTitleText}>
              FAKULTAS USHULUDDIN ADAB DAN DAKWAH
            </Text>
            <Text style={styles.contentTitleText}>
              JURUSAN BIMBINGAN KONSELING ISLAM
            </Text>
          </View>

          <View style={styles.table}>
            <View style={styles.tableHead}>
              <Text style={styles.row1}>Interval Presentase (%)</Text>
              <Text style={styles.row2}>Klasifikasi</Text>
              <Text style={styles.row3}>Interpretasi</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.row1}>1-33</Text>
              <Text style={styles.row2}>Rendah</Text>
              <Text style={styles.row3}>
                Siswa memiliki persepsi positif terhadap diri dan lingkungan
                yang mendukungnya untuk dapat melakukan interaksi sosial dengan
                baik
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.row1}>34-65</Text>
              <Text style={styles.row2}>Sedang</Text>
              <Text style={styles.row3}>
                Siswa cukup memiliki persepsi negatif terhadap diri dan
                lingkungan yang mengakibatkan siswa melakukan penghindaran
                sosial
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.row1}>66-100</Text>
              <Text style={styles.row2}>Tinggi</Text>
              <Text style={styles.row3}>
                Siswa memiliki persepsi negatif terhadap diri dan lingkungannya
                yang mengakibatkan siswa melakukan penghindaran sosial
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

const styles = StyleSheet.create({
  viewer: {
    width: "100%",
    height: "100vh"
  },
  page: {
    paddingHorizontal: 64,
    paddingVertical: 30,
    fontFamily: "Times-Roman"
  },

  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  kopSurat: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10
  },
  images: {
    width: 55,
    height: 65
  },
  location: {
    fontSize: 10,
    position: "absolute",
    top: 10,
    bottom: 10,
    right: 0
  },
  isoKanContainer: {
    position: "absolute",
    bottom: 10,
    right: 20
  },
  isoKan: {
    width: 40,
    height: 40
  },
  header: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    fontFamily: "Times-Roman",
    fontSize: 13.5,
    width: "100%",
    paddingLeft: 16
  },
  name: {
    marginBottom: 3
  },
  faculty: {
    textTransform: "uppercase",
    marginBottom: 3,
    fontFamily: "Times-Bold"
  },
  university: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: 3,
    fontFamily: "Times-Bold"
  },
  line: {
    width: "100%",
    height: "3px",
    backgroundColor: "black"
  },
  contentTitle: {
    textAlign: "center",
    fontSize: 12,
    marginBottom: 16,
    marginTop: 6,
    fontFamily: "Times-Bold"
  },
  contentTitleText: {
    fontSize: 12,
    marginBottom: 2
  },
  contentTitleText2: {
    marginTop: 20,
    fontSize: 12
  },
  data: {
    fontSize: 11,
    fontWeight: "bold",
    // paddingLeft: 12,
    marginBottom: 10,
    fontFamily: "Times-Bold"
  },
  headerTextContent: {
    fontSize: 12,
    marginTop: 16,
    // marginBottom: 12000,
    textAlign: "justify",
    lineHeight: "1.25px",
    letterSpacing: "0.1px"
  },
  headerTextContainer: {
    flexDirection: "row"
  },
  headerBold: {
    fontFamily: "Times-Bold"
  },
  footerTextContent: {
    fontSize: 11,
    textAlign: "justify",
    marginTop: 16,
    lineHeight: "1.75px",
    letterSpacing: "0.25px",
    fontFamily: "Times-Roman"
  },
  address: {
    fontSize: 11,
    fontFamily: "Times-Bold"
  },
  content: {
    display: "flex",
    flexDirection: "column"
  },
  students: {
    display: "flex",
    flexDirection: "column"
  },
  biodata: {
    flexDirection: "row",
    marginTop: 16,
    fontFamily: "Times-Bold"
  },
  studentData: {
    width: "20%",
    fontFamily: "Times-Roman"
  },
  studentDataValue: {
    width: "80%",
    fontFamily: "Times-Roman"
  },

  footer: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "flex-end"
  },

  footerContentLeft: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "40%"
  },
  footerBottomText: {
    fontSize: 11,
    fontFamily: "Times-Roman"
  },
  barcodeImage: {
    width: 90,
    height: 90
  },
  ttdImage: {
    width: 75,
    height: 75,
    marginLeft: 30
  },
  table: {
    borderWidth: 1
  },
  tableHead: {
    flexDirection: "row",
    fontFamily: "Times-Roman",
    fontSize: 12,
    textAlign: "center"
  },
  tableRow: {
    flexDirection: "row",
    fontFamily: "Times-Roman",
    fontSize: 12,
    borderTop: 1
  },
  row1: {
    width: "25%",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRight: 1,
    textAlign: "center"
  },
  row2: {
    width: "25%",
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRight: 1,
    textAlign: "center"
  },
  row3: {
    width: "50%",
    paddingHorizontal: 7,
    paddingVertical: 5,
    textAlign: "justify"
  }
});

export default AnxietyTestResult;
