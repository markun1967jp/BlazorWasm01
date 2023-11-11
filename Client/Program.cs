using BlazorWasm01;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

namespace BlazorWasm01
{
    // �v���O�����̍X�V��́A�uService Worker Version�v���X�V���邱�ƁI
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("#app");
            builder.RootComponents.Add<HeadOutlet>("head::after");

            builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
            // �ǉ��A���ʕϐ��p
            builder.Services.AddSingleton<CommonDataService>();

            await builder.Build().RunAsync();
        }
    }
}