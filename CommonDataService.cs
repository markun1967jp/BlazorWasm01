namespace BlazorWasm01
{
    // 共通変数
    public class CommonDataService
    {
        public string SharedData { get; set; }
        public int iCount { get; set; } = 0;
        // 他の共通データやメソッド
        public ScanData scanData=new ScanData();
        public List<ScanData> scanDatas = new List<ScanData>();
    }
}
