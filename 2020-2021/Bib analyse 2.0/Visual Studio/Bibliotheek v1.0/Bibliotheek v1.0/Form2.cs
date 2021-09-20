using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Bibliotheek_v1._0
{
    public partial class Form2 : Form
    {
        public Form2()
        {
            InitializeComponent();
        }

        private void Item1_Click(object sender, EventArgs e)
        {
            Form1 form1 = new Form1();
            form1.Show();
            Hide();
        }

        private void Item2_Click(object sender, EventArgs e)
        {

        }

        private void Item3_Click(object sender, EventArgs e)
        {

        }

        private void Item4_Click(object sender, EventArgs e)
        {

        }
    }
}
