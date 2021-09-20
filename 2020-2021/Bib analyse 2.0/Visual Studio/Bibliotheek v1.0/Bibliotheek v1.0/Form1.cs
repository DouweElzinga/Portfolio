using System;
using System.Data;
using System.Data.SqlClient;
using System.Windows.Forms;

namespace Bibliotheek_v1._0
{
    public partial class Form1 : Form
    {
        string connectionString = Properties.Settings.Default.douwebaseConnectionString;
        SqlConnection connection;

        public Form1()
        {
            InitializeComponent();
            connection = new SqlConnection();
            connection.ConnectionString = connectionString;
            
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("SELECT * FROM List1", connection))
                    using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        
                    }
                }
            }
        }


        private void Home_Click(object sender, EventArgs e)
        {

        }

        private void Links_Click(object sender, EventArgs e)
        {
            Form3 form3 = new Form3();
            form3.Show();
            Hide();
        }

        private void Opties_Click(object sender, EventArgs e)
        {
            Form2 form2 = new Form2();
            form2.Show();
            Hide();
        }
        private void Sorteren_Click(object sender, EventArgs e)
        {

        }

        private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }
    }
}
