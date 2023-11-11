// ログエントリのデータモデル
public class ScanData
{
    public string バーコード { get; set; }
    public int 数量 { get; set; }
    public DateTime 処理日時 { get; set; } = DateTime.Now;
}
