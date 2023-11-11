using BlazorWasm01;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

namespace BlazorWasm01
{
    // プログラムの更新後は、「Service Worker Version」を更新すること！
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("#app");
            builder.RootComponents.Add<HeadOutlet>("head::after");

            builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
            // 追加、共通変数用
            builder.Services.AddSingleton<CommonDataService>();

            await builder.Build().RunAsync();
        }
    }
}