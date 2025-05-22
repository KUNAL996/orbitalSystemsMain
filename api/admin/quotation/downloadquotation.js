const db = require("../../../Database/db");

const downloadQuotation = async (req, res) => {
  const { quotationNo } = req.body;

  try {
    const result = await db.pool.query(
      `SELECT quotation_file, file_name, file_type FROM customer_quotation WHERE quotation_number = $1`,
      [quotationNo]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Quotation not found" });
    }

    const file = result.rows[0];

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${file.file_name}"`
    );
    res.setHeader("Content-Type", file.file_type);
    res.send(file.quotation_file);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { downloadQuotation };
