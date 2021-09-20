namespace Bibliotheek_v1._0
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.home = new System.Windows.Forms.ToolStripMenuItem();
            this.links = new System.Windows.Forms.ToolStripMenuItem();
            this.opties = new System.Windows.Forms.ToolStripMenuItem();
            this.sorteren = new System.Windows.Forms.ToolStripMenuItem();
            this.toolStripMenuItem1 = new System.Windows.Forms.ToolStripMenuItem();
            this.toolStripMenuItem2 = new System.Windows.Forms.ToolStripMenuItem();
            this.vScrollBar1 = new System.Windows.Forms.VScrollBar();
            this.listBox1 = new System.Windows.Forms.ListBox();
            this.bindingSource1 = new System.Windows.Forms.BindingSource(this.components);
            this.douwebaseDataSet = new Bibliotheek_v1._0.douwebaseDataSet();
            this.menuStrip1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.bindingSource1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.douwebaseDataSet)).BeginInit();
            this.SuspendLayout();
            // 
            // menuStrip1
            // 
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.home,
            this.links,
            this.opties,
            this.sorteren});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Padding = new System.Windows.Forms.Padding(6, 10, 0, 10);
            this.menuStrip1.Size = new System.Drawing.Size(800, 40);
            this.menuStrip1.TabIndex = 0;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // home
            // 
            this.home.Font = new System.Drawing.Font("Broadway", 10F);
            this.home.Margin = new System.Windows.Forms.Padding(40, 0, 0, 0);
            this.home.Name = "home";
            this.home.Padding = new System.Windows.Forms.Padding(100, 0, 4, 0);
            this.home.Size = new System.Drawing.Size(159, 20);
            this.home.Text = "Home";
            this.home.Click += new System.EventHandler(this.Home_Click);
            // 
            // links
            // 
            this.links.Font = new System.Drawing.Font("Broadway", 10F);
            this.links.Margin = new System.Windows.Forms.Padding(15, 0, 0, 0);
            this.links.Name = "links";
            this.links.Padding = new System.Windows.Forms.Padding(100, 0, 4, 0);
            this.links.Size = new System.Drawing.Size(158, 20);
            this.links.Text = "Links";
            this.links.Click += new System.EventHandler(this.Links_Click);
            // 
            // opties
            // 
            this.opties.Font = new System.Drawing.Font("Broadway", 10F);
            this.opties.Margin = new System.Windows.Forms.Padding(15, 0, 0, 0);
            this.opties.Name = "opties";
            this.opties.Padding = new System.Windows.Forms.Padding(100, 0, 4, 0);
            this.opties.Size = new System.Drawing.Size(163, 20);
            this.opties.Text = "Opties";
            this.opties.Click += new System.EventHandler(this.Opties_Click);
            // 
            // sorteren
            // 
            this.sorteren.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.toolStripMenuItem1,
            this.toolStripMenuItem2});
            this.sorteren.Font = new System.Drawing.Font("Broadway", 10F);
            this.sorteren.Margin = new System.Windows.Forms.Padding(15, 0, 0, 0);
            this.sorteren.Name = "sorteren";
            this.sorteren.Padding = new System.Windows.Forms.Padding(100, 0, 4, 0);
            this.sorteren.Size = new System.Drawing.Size(179, 20);
            this.sorteren.Text = "Sorteren";
            this.sorteren.Click += new System.EventHandler(this.Sorteren_Click);
            // 
            // toolStripMenuItem1
            // 
            this.toolStripMenuItem1.Name = "toolStripMenuItem1";
            this.toolStripMenuItem1.Size = new System.Drawing.Size(178, 22);
            this.toolStripMenuItem1.Text = "Alphabetisch";
            // 
            // toolStripMenuItem2
            // 
            this.toolStripMenuItem2.Name = "toolStripMenuItem2";
            this.toolStripMenuItem2.Size = new System.Drawing.Size(178, 22);
            this.toolStripMenuItem2.Text = "Genre";
            // 
            // vScrollBar1
            // 
            this.vScrollBar1.Location = new System.Drawing.Point(774, 40);
            this.vScrollBar1.Name = "vScrollBar1";
            this.vScrollBar1.Size = new System.Drawing.Size(26, 410);
            this.vScrollBar1.TabIndex = 2;
            // 
            // listBox1
            // 
            this.listBox1.DataSource = this.bindingSource1;
            this.listBox1.FormattingEnabled = true;
            this.listBox1.Location = new System.Drawing.Point(12, 55);
            this.listBox1.Name = "listBox1";
            this.listBox1.Size = new System.Drawing.Size(61, 160);
            this.listBox1.TabIndex = 3;
            this.listBox1.SelectedIndexChanged += new System.EventHandler(this.listBox1_SelectedIndexChanged);
            // 
            // bindingSource1
            // 
            this.bindingSource1.DataSource = this.douwebaseDataSet;
            this.bindingSource1.Position = 0;
            // 
            // douwebaseDataSet
            // 
            this.douwebaseDataSet.DataSetName = "douwebaseDataSet";
            this.douwebaseDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.IndianRed;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.listBox1);
            this.Controls.Add(this.vScrollBar1);
            this.Controls.Add(this.menuStrip1);
            this.ForeColor = System.Drawing.SystemColors.ControlText;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MainMenuStrip = this.menuStrip1;
            this.Name = "Form1";
            this.Text = "Artists";
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.bindingSource1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.douwebaseDataSet)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem home;
        private System.Windows.Forms.ToolStripMenuItem links;
        private System.Windows.Forms.ToolStripMenuItem opties;
        private System.Windows.Forms.ToolStripMenuItem sorteren;
        private System.Windows.Forms.VScrollBar vScrollBar1;
        private System.Windows.Forms.ToolStripMenuItem toolStripMenuItem1;
        private System.Windows.Forms.ToolStripMenuItem toolStripMenuItem2;
        private System.Windows.Forms.ListBox listBox1;
        private System.Windows.Forms.BindingSource bindingSource1;
        private douwebaseDataSet douwebaseDataSet;
    }
}

