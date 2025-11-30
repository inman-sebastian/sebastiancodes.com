export default function Background() {
    const image = "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="fixed inset-0 -z-10 size-full overflow-hidden">
            <div className="absolute inset-0 backdrop-blur-[50px] z-10" />
            <div className="absolute inset-0 bg-cover opacity-5 bg-center" style={{ backgroundImage: `url(${image})` }} />
        </div>
    )
}